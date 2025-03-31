function Titlescreen() {
    this.setup = function() {
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);
    }

    this.draw = function() {
        background(achtergrond);
        fill(0);
        text("Welkom bij Stickman Fight!", width / 2, height / 2);
        text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
        if (keyPressed() && keyCode === ENTER) {
            let Easy = createButton('Easy');
            let Hard = createButton('Hard');

            Easy.mouseClicked(this.startEasy);
            Hard.mouseClicked(this.startHard);
        }
    }

    this.startEasy = function() {
        this.sceneManager.showScene(EasyLevel1);
    }
    this.startHard = function() {
        this.sceneManager.showScene(HardLevel1);
    }
}