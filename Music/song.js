// Music Controls
var playlist = [
    '../../assets/music/Usagi\ Flap.mp3',
    '../../assets/music/Two\ Hearts\ Become\ One.flac', 
    '../../assets/music/Magnus\ Ludvigsson\ Sosso\ Royalty\ Free\ Music.mp3',
    '../../assets/music/Love\ Birds.flac',
    '../../assets/music/Ahead\ of\ Us.mp3',
    '../../assets/music/Flowers\ Piano\ Orchestra\ In\ Love\ With\ A\ Ghost\ Nori.mp3',
    '../../assets/music/I\ Secretly\ Love\ You\ Piano\ Cello.mp3'
]; 

var currentSong = 0;
var audio = new Audio(playlist[currentSong]);
audio.loop = false; // Set loop to false so the audio don't just loop on itself over and over again
audio.autoplay = true; // Set autoplay to true so the audio starts playing automatically

window.onload = function() {
    document.getElementById('vinyl').style.animation = 'spin 2s linear infinite';
    fadeInOut('tooltip', 1000, 2000); // fade in and out
};

document.getElementById('vinyl').onclick = function () {
    if (audio.paused) {
        audio.play();
        document.getElementById('vinyl').style.animation = 'spin 2s linear infinite';
        fadeInOut('tooltip', 1000, 2000); // fade in and out
    } else {
        audio.pause();
        document.getElementById('vinyl').style.animation = 'none';
    }
};

document.getElementById('vinyl').onmouseover = function () {
    fadeIn('tooltip', 500); // Show tooltip on hover
};

document.getElementById('vinyl').onmouseout = function () {
    fadeOut('tooltip', 500); // Hide tooltip when not hovering
};

function updateTooltip() {
    var audioSrc = audio.src;
    var filename = audioSrc.substring(audioSrc.lastIndexOf('/') + 1); // Remove %20 if and when you have a space in your file name
    filename = decodeURIComponent(filename);
    filename = filename.substring(0, filename.lastIndexOf('.')); // Remove file extension
    document.getElementById('tooltip').innerText = 'Now Playing: ' + filename;
}

audio.addEventListener('ended', function () {
    currentSong++;
    if (currentSong == playlist.length) currentSong = 0; // Loop back to the first song
    audio.src = playlist[currentSong];
    audio.play();
    fadeInOut('tooltip', 1000, 2000); // Slide in and out when song changes
});

audio.addEventListener('play', updateTooltip);

function fadeInOut(id, timeIn, delay) {
    var element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.display = "block";
    
    setTimeout(function() {
        element.style.transition = `opacity ${timeIn}ms`;
        element.style.opacity = 1;
        
        setTimeout(function() {
            element.style.transition = `opacity ${timeIn}ms`;
            element.style.opacity = 0;
        }, delay);
        
    }, timeIn);
}

function fadeIn(id, time) {
    var element = document.getElementById(id);
    clearTimeout(element.fadeTimeout);
    element.style.transition = `opacity ${time}ms`;
    element.style.opacity = 1;
    element.style.display = "block";
}

function fadeOut(id, time) {
    var element = document.getElementById(id);
    clearTimeout(element.fadeTimeout);
    element.fadeTimeout = setTimeout(function() {
        element.style.transition = `opacity ${time}ms`;
        element.style.opacity = 0;
        setTimeout(function() {
            element.style.display = "none";
        }, time);
    }, time);
}
