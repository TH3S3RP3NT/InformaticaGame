function EasyLevel1() {
    this.setup = function() {
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);
    }

    this.draw = function() {
        background(achtergrond);
        fill(0);
        text("Easy Level 1", width / 2, height / 2);
        text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
        if (keyPressed() && keyCode === ENTER) {
            this.level;
        }
    }

    this.level = function() {
        // Hier komt de logica voor Easy Level 1
        fill(0);
        text("Dit is Easy Level 1", width / 2, height / 2 + 100);
        text("Druk op N om naar het volgende level te gaan", width / 2, height / 2 + 150);
        if (keyPressed() && keyCode === 78) {
            this.sceneManager.showScene(EasyLevel2);
        }
    }
}