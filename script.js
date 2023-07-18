console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "L Theme", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Arcade", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Baaraat", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Believer", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Blank Space", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Doctor Theme", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mankatha Theme", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Hridayam", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Once upon a time", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Faded", filePath: "songs/6.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
const search = ()=>{
    let searchInput = document.getElementById('search-item');
    searchInput.addEventListener('input', function(event) {
          let searchText = event.target.value.toLowerCase();// Filter the songs array based on the search query
            let filteredSongs = songs.filter(function(song) {
            return song.songName.toLowerCase().includes(searchText);
        });
  
  // Update the displayed song items
  songItems.forEach(function(element, i) {
    if (filteredSongs.includes(songs[i])) {
      element.style.display = ""; // Show the song item
    } else {
      element.style.display = 'none'; // Hide the song item
    }
  });
});
}
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = (i)=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        const clickedIndex = parseInt(e.target.id); 
        makeAllPlays(clickedIndex);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
         // Get the photo div element
        const photoDiv = document.querySelector('.photo');

        // Add the "transition" class to enable the transition effect
        photoDiv.classList.add('transition');

        // Get the image element within the "photo" class
        const photoImage = photoDiv.querySelector('img');

        // Get the cover path for the clicked song
        const coverPath = songs[songIndex].coverPath;

        // Set the cover path as the src attribute of the image element
        photoImage.src = coverPath;

        // Remove the "transition" class after a delay to allow the transition effect to take place
        setTimeout(() => {
        photoDiv.classList.remove('transition');
        }, 250); // Duration of the transition in milliseconds
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    const photoDiv = document.querySelector('.photo');

        // Add the "transition" class to enable the transition effect
        photoDiv.classList.add('transition');

        // Get the image element within the "photo" class
        const photoImage = photoDiv.querySelector('img');

        // Get the cover path for the clicked song
        const coverPath = songs[songIndex].coverPath;

        // Set the cover path as the src attribute of the image element
        photoImage.src = coverPath;

        // Remove the "transition" class after a delay to allow the transition effect to take place
        setTimeout(() => {
        photoDiv.classList.remove('transition');
        }, 250);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    const photoDiv = document.querySelector('.photo');

        // Add the "transition" class to enable the transition effect
        photoDiv.classList.add('transition');

        // Get the image element within the "photo" class
        const photoImage = photoDiv.querySelector('img');

        // Get the cover path for the clicked song
        const coverPath = songs[songIndex].coverPath;

        // Set the cover path as the src attribute of the image element
        photoImage.src = coverPath;

        // Remove the "transition" class after a delay to allow the transition effect to take place
        setTimeout(() => {
        photoDiv.classList.remove('transition');
        }, 250);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})