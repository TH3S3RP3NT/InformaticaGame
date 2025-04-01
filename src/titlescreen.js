function Titlescreen() {
    this.gameStarted = false;

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
        if (keyCode === ENTER) {
            this.gameStarted = true; // Update the state to indicate the game has started
            text("Voer je naam in:", width / 2, height / 2 + 100);
            let Name = createInput();
            storeItem('name', Name.value());
            let Easy = createButton('Easy');
            let Hard = createButton('Hard');
            Easy.position(width / 2 - 50, height / 2 + 150);
            Hard.position(width / 2 + 50, height / 2 + 150);
            Name.position(width / 2 - 50, height / 2 + 50);

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