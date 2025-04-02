let mgr;
let muziek = [];
let currentTrackIndex = 0;
let musicData;
let isMusicPlaying = false; // Track if music is playing

function preload() {
    musicData = loadJSON("/InformaticaGame/public/assets/json/music.json", () => {
        for (let i = 0; i < musicData.Muziek.length; i++) {
            muziek.push(loadSound('/InformaticaGame/public/assets/music/' + musicData.Muziek[i].filename));
        }
    });
    achtergrond = loadImage("/InformaticaGame/public/assets/img/basicarenabackground.jpg");
    font = loadFont('/InformaticaGame/public/assets/fonts/Marianne.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    mgr = new SceneManager();
    mgr.wire();
    mgr.showScene(Titlescreen);

    // Start playing the music if it's not already playing
    if (!isMusicPlaying) {
        muziek[currentTrackIndex].play();
        muziek[currentTrackIndex].onended(playNextTrack);
        isMusicPlaying = true; // Set the flag to true
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    mgr.draw();
}

function keyPressed() {
    if (keyCode === ENTER) {
        if (muziek[currentTrackIndex].isPlaying()) {
            muziek[currentTrackIndex].pause(); // Pause if currently playing
        } else {
            muziek[currentTrackIndex].play(); // Play if paused
        }
    }
}

function playNextTrack() {
    if (muziek[currentTrackIndex]) {
        muziek[currentTrackIndex].stop(); // Stop the current track
    }

    currentTrackIndex++; // Move to the next track

    if (currentTrackIndex >= muziek.length) {
        currentTrackIndex = 0; // Loop back to the start
    }

    muziek[currentTrackIndex].play(); // Play the next track
}