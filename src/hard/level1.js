function HardLevel1(){
    this.setup = function() {
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);
    }

    this.draw = function() {
        background(achtergrond);
        fill(0);
        text("Hard Level 1", width / 2, height / 2);
        text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
        if (keyPressed() && keyCode === ENTER) {
            this.level;
        }
    }

    this.level = function() {
        fill(0);
    }
}