function titlescreen() {
    this.setup = function () {
        textFont("Monospace");
        textSize(40);
        textAlign(CENTER, CENTER);
    }

    this.draw = function() {
        background(achtergrond);
        fill(0);
        text("Welkom bij Stickman Fight!", width / 2, height / 2);
        text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
        if (keyPressed() && keyCode == ENTER) {
            let Easy = createButton('Easy');
            let Hard = createButton('Hard');
            let Regels = createButton('Regels');
        }



    }
}