var muziek = [];
var currentTrackIndex = 0;
var musicData;
function preload() {
    musicData = loadJSON("../assets/json/music.json", () => {
        for (var i = 0; i < musicData.Muziek.length; i++) {
            muziek.push(loadSound('../assets/music/' + musicData.Muziek[i].filename));
        }
    });
    achtergrond = loadImage("../assets/img/basicarenabackground.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER, CENTER);
    muziek[currentTrackIndex].play();
    muziek[currentTrackIndex].onended(playNextTrack);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }

function draw() {
    background(achtergrond);
    text('Stickman Fight!', 0, 0, canvas.width, canvas.height / 2);
    textAlign(RIGHT, BOTTOM);
    textSize(20);

}

function keyPressed() {
    if (keyCode == ENTER) {
            muziek[currentTrackIndex].play();
    }
    if (keyCode == 78) {
        playNextTrack()
    }
}

function playNextTrack() {
    if (muziek[currentTrackIndex]) {
        muziek[currentTrackIndex].stop();
    }


    currentTrackIndex++;

    if (currentTrackIndex >= muziek.length) {
        currentTrackIndex = 0;
    }

    muziek[currentTrackIndex].play();
}