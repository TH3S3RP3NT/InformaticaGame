function EasyLevel1() {
    let bg;
    let player1;
    let player2;
    let gameStarted = false;
    let isColliding = false;
    let player1CanAttack = true;
    let player2CanAttack = true;


    this.setup = function () {
        clear();
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);
        player1 = new Stickman(100, height - 400, 'red', 87, 65, 83, 68);
        player2 = new Stickman(1000, height - 400, 'blue', UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW);
    }

    this.draw = function () {
        background(achtergrond);

        if (!gameStarted) {
            fill(0);
            text("Zijn jullie klaar op te vechten?", width / 2, height / 2);
            text("Druk op ENTER om te beginnen", width / 2, height / 2 + 50);
            if (keyIsPressed && keyCode === ENTER) {
                gameStarted = true;
                player1.health = 100;
                player2.health = 100;
            }
        } else {
            this.level();
        }
    }

    this.level = function () {
        player1.update();
        player1.display();

        player2.update();
        player2.display();

        isColliding = this.checkCollision(player1, player2);
        this.handleAttacks(isColliding);
    }

    this.checkCollision = function (player1, player2) {

        if (player1.x < player2.x + player2.width &&
            player1.x + player1.width > player2.x &&
            player1.y < player2.y + player2.height &&
            player1.y + player1.height > player2.y) {
            return true;
        }
        return false;
    }

    this.handleAttacks = function (isColliding) {
        if (isColliding) {
            if (keyIsPressed) {
                if (keyCode === 70 && player1CanAttack) {
                    player2.health -= 5;
                    player1CanAttack = false;
                    player1.startFighting();
                    setTimeout(() => player1CanAttack = true, 500);
                }
                if (keyCode === 76 && player2CanAttack) {
                    player1.health -= 5;
                    player2CanAttack = false;
                    player2.startFighting();
                    setTimeout(() => player2CanAttack = true, 500);
                }
            }
        }

        if (player1.health <= 0) {
            this.sceneManager.showScene(LoseScreen);
        }
        if (player2.health <= 0) {
            this.sceneManager.showScene(LoseScreen);
        }
    }

    this.keyReleased = function() {
        if (keyCode === 70) {
            player1CanAttack = true;
            player1.isFighting = false;
        }
        if (keyCode === 76) {
            player2CanAttack = true;
            player2.isFighting = false;
        }
    }
}