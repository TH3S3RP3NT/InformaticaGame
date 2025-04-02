function Titlescreen() {
    this.gameStarted = false;
    let Name;
    let Easy;
    let Hard;

    this.setup = function() {
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);
    }

    this.draw = function() {
        background(achtergrond);
        fill(0);

        if (!this.gameStarted) {
            text("Welkom bij Stickman Fight!", width / 2, height / 2);
            text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
        } else {
            text("Voer je naam in:", width / 2, height / 2 + 100);
            Name.show();
            Easy.show();
            Hard.show();
        }
    }

    this.keyPressed = function() {
        if (keyCode === ENTER && !this.gameStarted) {
            this.gameStarted = true;


            Name = createInput();
            Name.position(width / 2, height / 2 + 25);

            Easy = createButton('Easy');
            Easy.position(width / 2 - 50, height / 2);

            Hard = createButton('Hard');
            Hard.position(width / 2 + 50, height / 2);


            Easy.mouseClicked(this.startEasy.bind(this));
            Hard.mouseClicked(this.startHard.bind(this));
        }
    }

    this.startEasy = function() {
        this.sceneManager.showScene(EasyLevel1);
    }
    this.startHard = function() {
        this.sceneManager.showScene(HardLevel1);
    }
}