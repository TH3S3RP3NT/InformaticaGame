function Titlescreen() {
    this.gameStarted = false;
    this.name1Saved = false;
    this.name2Saved = false;
    let Name1;
    let Name2;
    let Easy;
    let Opslaan1;
    let Opslaan2;

    let currentTrackIndex = 0;
    let isMusicPlaying = false;

    this.setup = function () {
        clear();
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);

        this.gameStarted = false;
        this.name1Saved = false;
        this.name2Saved = false;

        // Element dimensions
        const inputWidth = 300;
        const inputHeight = 30;
        const buttonWidth = 100;
        const buttonHeight = 30;

        // Vertical positions
        const titleY = height/3;
        const player1Y = height/2;
        const player2Y = height/2 + 140;
        const buttonYOffset = 40;
        const beginButtonY = height/2 + 200;

        // Create title text (handled in draw())

        // Player 1 elements
        Name1 = createInput();
        Name1.position(width/2 - inputWidth/2, player1Y);
        Name1.size(inputWidth, inputHeight);
        Name1.style('text-align', 'center');
        Name1.hide();

        Opslaan1 = createButton('Opslaan');
        Opslaan1.position(width/2 - buttonWidth/2, player1Y + buttonYOffset);
        Opslaan1.size(buttonWidth, buttonHeight);
        Opslaan1.hide();

        // Player 2 elements
        Name2 = createInput();
        Name2.position(width/2 - inputWidth/2, player2Y);
        Name2.size(inputWidth, inputHeight);
        Name2.style('text-align', 'center');
        Name2.hide();

        Opslaan2 = createButton('Opslaan');
        Opslaan2.position(width/2 - buttonWidth/2, player2Y + buttonYOffset);
        Opslaan2.size(buttonWidth, buttonHeight);
        Opslaan2.hide();

        // Begin button
        Easy = createButton('Begin');
        Easy.position(width/2 - buttonWidth/2, beginButtonY);
        Easy.size(buttonWidth, buttonHeight);
        Easy.hide();

        Opslaan1.mouseClicked(this.saveName1.bind(this));
        Opslaan2.mouseClicked(this.saveName2.bind(this));
        Easy.mouseClicked(this.startEasy.bind(this));
    }

    this.draw = function () {
        background(achtergrond);
        fill(0);
        textAlign(CENTER, CENTER);

        if (!this.gameStarted) {
            text("Welkom bij Stickman Fight!", width/2, height/3);
            text("Druk op ENTER om te beginnen", width/2, height/3 + 50);
        } else {
            // Main title
            text("Voer jullie namen in:", width/2, height/3 + 20);

            // Player 1 section
            if (Name1.elt.style.display !== 'none') {
                textAlign(CENTER, CENTER);
                text("Speler 1:", width/2, height/2 - 30);
            }

            // Player 2 section
            if (Name2.elt.style.display !== 'none') {
                text("Speler 2:", width/2, height/2 + 100);
            }

            // Show begin button when both names are saved
            if (this.name1Saved && this.name2Saved) {
                Easy.show();
            }
        }
    }

    this.keyPressed = function () {
        if (keyCode === ENTER && !this.gameStarted) {
            this.gameStarted = true;
            Name1.show();
            Opslaan1.show();
            Name2.show();
            Opslaan2.show();
            this.playMusic();
        }
    }

    this.playMusic = function() {
        if (!isMusicPlaying && muziek.length > 0) {
            muziek[currentTrackIndex].play();
            isMusicPlaying = true;
            muziek[currentTrackIndex].onended(this.playNextTrack.bind(this));
        }
    }

    this.playNextTrack = function() {
        if (muziek[currentTrackIndex] && muziek[currentTrackIndex].isPlaying()) {
            muziek[currentTrackIndex].stop();
        }

        currentTrackIndex++;
        if (currentTrackIndex >= muziek.length) {
            currentTrackIndex = 0;
        }

        if (muziek[currentTrackIndex]) {
            muziek[currentTrackIndex].play();
            muziek[currentTrackIndex].onended(this.playNextTrack.bind(this));
        }
    }

    this.saveName1 = function () {
        let name1 = Name1.value();
        if (name1) {
            storeItem('name1', name1);
            this.name1Saved = true;
            Name1.hide();
            Opslaan1.hide();
        }
    }

    this.saveName2 = function () {
        let name2 = Name2.value();
        if (name2) {
            storeItem('name2', name2);
            this.name2Saved = true;
            Name2.hide();
            Opslaan2.hide();
        }
    }

    this.startEasy = function () {
        Easy.hide();
        this.sceneManager.showScene(EasyLevel1);
    }
}