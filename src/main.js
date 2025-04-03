let mgr;
let muziek = [];
let currentTrackIndex = 0;
let musicData;
let isMusicPlaying = false;

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
}

function playMusic() {
    if (!isMusicPlaying) {
        muziek[currentTrackIndex].play();
        isMusicPlaying = true;
        muziek[currentTrackIndex].onended(playNextTrack);
    }
}


function playNextTrack() {
    // Stop the current track only if it's playing
    if (muziek[currentTrackIndex] && muziek[currentTrackIndex].isPlaying()) {
        muziek[currentTrackIndex].stop();
    }

    // Move to the next track
    currentTrackIndex++;

    // Loop back to the first track if we've reached the end
    if (currentTrackIndex >= muziek.length) {
        currentTrackIndex = 0;
    }

    // Play the next track
    muziek[currentTrackIndex].play();
    muziek[currentTrackIndex].onended(playNextTrack); // Set the onended callback for the new track
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    mgr.draw();
}

function keyPressed() {
    mgr.handleEvent("keyPressed");
}

function mousePressed() {
    mgr.handleEvent("mousePressed");
    playMusic();
}

function mouseReleased() {
    mgr.handleEvent("mouseReleased");
}
function mouseMoved() {
    mgr.handleEvent("mouseMoved");
}