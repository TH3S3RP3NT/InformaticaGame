function Titlescreen() {
    this.gameStarted = false;
    this.nameSaved = false;
    let Name;
    let Easy;
    let Hard;
    let Opslaan;

    this.setup = function () {
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);
    }

    this.draw = function () {
        background(achtergrond);
        fill(0);

        if (!this.gameStarted) {
            text("Welkom bij Stickman Fight!", width / 2, height / 2);
            text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
        } else {
            text("Voer je naam in:", width / 2, height / 2);
            Name.show();
            Opslaan.show();

            if (this.nameSaved) {
                let name = Name.value(); // Get the name again
                text(`Hallo ${name}, kies je moeilijkheidsgraad:`, width / 2, height / 2 + 50);
            }
        }
    }

    this.keyPressed = function () {
        if (keyCode === ENTER && !this.gameStarted) {
            this.gameStarted = true;


            Name = createInput();
            Name.position(width / 2 - 50, height / 2 + 25);

            Opslaan = createButton('Opslaan');
            Opslaan.position(width / 2, height / 2 + 50);

            Easy = createButton('Easy');
            Easy.hide();
            Easy.position(width / 2 - 50, height / 2);

            Hard = createButton('Hard');
            Hard.hide();
            Hard.position(width / 2 + 50, height / 2);


            Easy.mouseClicked(this.startEasy.bind(this));
            Hard.mouseClicked(this.startHard.bind(this));
            Opslaan.mouseClicked(this.saveName.bind(this));
        }
    }

    this.saveName = function () {
        let name = Name.value();
        if (name) {
            storeItem('name', name);
            Name.hide();
            Opslaan.hide();
            this.nameSaved = true; // Set the flag to true

            Easy.show();
            Hard.show();
        }
    }

    this.startEasy = function () {
        Easy.hide();
        Hard.hide();
        this.sceneManager.showScene(EasyLevel1);
    }
    this.startHard = function () {
        Easy.hide();
        Hard.hide();
        this.sceneManager.showScene(HardLevel1);
    }
}