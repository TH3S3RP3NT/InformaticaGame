let mgr;
let muziek = [];
let musicData;
let stickmanStanding;
let stickmanWalking;
let stickmanFighting;

function preload() {
    musicData = loadJSON("/InformaticaGame/public/assets/json/music.json", () => {
        for (let i = 0; i < musicData.Muziek.length; i++) {
            muziek.push(loadSound('/InformaticaGame/public/assets/music/' + musicData.Muziek[i].filename));
        }
    });
    achtergrond = loadImage("/InformaticaGame/public/assets/img/basicarenabackground.jpg");
    font = loadFont('/InformaticaGame/public/assets/fonts/Marianne.otf');
    stickmanStanding = loadImage('/InformaticaGame/public/assets/img/stickman_standing.png');
    stickmanWalking = loadImage('/InformaticaGame/public/assets/img/stickman_walking.gif');
    stickmanFighting = loadImage('/InformaticaGame/public/assets/img/stickman_fighting.gif');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    mgr = new SceneManager();
    mgr.wire();
    mgr.showScene(Titlescreen);
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
}

function mouseReleased() {
    mgr.handleEvent("mouseReleased");
}
function mouseMoved() {
    mgr.handleEvent("mouseMoved");
}