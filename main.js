var muziek = [];
var currentTrackIndex = 0;
function preload() {
    var musicData = loadJSON("assets/music.json");
    achtergrond = loadImage("assets/basicarenabackground.jpg");
    for (var i = 0; i < musicData.Muziek.length; i++) {
        muziek.push(loadSound('assets/music/' + musicData.Muziek[i].filename));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER, CENTER);
    b1 = new Bal();
    d1 = new Doel();
    muziek[currentTrackIndex].play();
    muziek[currentTrackIndex].onended(playNextTrack);
}

function draw() {
    background(achtergrond);
    text('Pas de grootte van je browserscherm aan zodat de bal zo vaak mogelijk het doel in het midden raakt.', 0, 0, canvas.width, canvas.height / 2);
    textAlign(RIGHT, BOTTOM);
    textSize(20);

}

function keyPressed() {
    if (keyCode == ENTER) {
            muziek[currentTrackIndex].play();
    }
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % muziek.length;
    muziek[currentTrackIndex].play();
    muziek[currentTrackIndex].onended(playNextTrack);
}