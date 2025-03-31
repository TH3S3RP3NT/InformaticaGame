var data;
var ringen = [];
var muziek;
function preload() {
    muziek = loadJSON("assets/music.json");
    achtergrond = loadImage("assets/basicarenabackground.jpg");
    
    raak = loadSound("assets/music/Ghostwriter - RJD2.mp3");
    data = loadJSON('assets/data.json');

}

function setup() {
    dataNaarArray();
    createCanvas(windowWidth, windowHeight);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER,CENTER);
    b1 = new Bal();
    d1 = new Doel();
    for (var i = 0; i < muziek.length; i++) {
        muziek[i] = loadSound('assets/music' + muziek[i].filename); // + load silence + loadSecondSound
    }}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    d1.bepaalDiameter();
    d1.x = canvas.width / 2;
    d1.y = canvas.height / 2;
}

function draw() {
    maakAchtergrond();
    d1.teken();
    b1.teken();

    if (d1.raakt(b1)) {
        if (!d1.wordtGeraakt) {
            d1.geraakt++;
            raak.play();
            d1.wordtGeraakt = true;
        }
    }
    else {
        d1.wordtGeraakt = false;
    }
    if (b1.actief) {
        b1.beweeg();
    }
    else {
        background();
        text('Tristan heeft money van je browserscherm aan zodat de bal zo vaak  het doel in het linkerhoek raakt.\n\nDruk ENTER om te starten.',canvas.width / 4,canvas.height / 4,canvas.width / 2,canvas.height / 2);
    }
}

function dataNaarArray() {
    var ring,x,y,diameter;
    var ringData = data['ringen'];
    for (var i = 0; i < ringData.length; i++) {
        ring = ringData[i];
        x = ring['middelpunt']['x'];
        y = ring['middelpunt']['y'];
        diameter = ring['diameter'];
        ringen.push(new Ring(x, y, diameter));
  }
}

function maakAchtergrond() {
    push();
    background(achtergrond);
    for (var i = 0; i < ringen.length; i++) {
        ringen[i].teken();
    }
    text('Pas de grootte van je browserscherm aan zodat de bal zo vaak mogelijk het doel in het midden raakt.',0,0,canvas.width,canvas.height / 2);
    textAlign(RIGHT,BOTTOM);
    textSize(20);
    text('Music: www.bensound.com',0,0,canvas.width,canvas.height);
    pop();
}

function keyPressed() {
  if (keyCode == ENTER) {
    if (!b1.actief) {
        b1.actief = true;
        Muziek.play();
    }
  }
}