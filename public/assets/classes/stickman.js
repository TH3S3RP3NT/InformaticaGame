class Stickman {
    constructor(x, y, color, upKey, leftKey, downKey, rightKey) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 250;
        this.height = 300;
        this.isMoving = false;
        this.isFighting = false;
        this.attackFrame = 0;
        this.attackSpeed = 0.25;
        this.attackFrameCount = 0;
        this.upKey = upKey;
        this.leftKey = leftKey;
        this.downKey = downKey;
        this.rightKey = rightKey;
        this.currentTexture = stickmanStanding;
        this.health = 100;
    }

    update() {
        this.isMoving = false;


        if (this.isFighting) {
            this.attackFrameCount++;

            if (this.attackFrameCount >= 1/this.attackSpeed) {
                this.attackFrame++;
                this.attackFrameCount = 0;
            }


            if (this.attackFrame >= stickmanFighting.numFrames()) {
                this.isFighting = false;
                this.attackFrame = 0;
            }
        }


        if (keyIsDown(this.upKey)) {
            this.y -= 5;
            this.isMoving = true;
        }
        if (keyIsDown(this.downKey)) {
            this.y += 5;
            this.isMoving = true;
        }
        if (keyIsDown(this.leftKey)) {
            this.x -= 5;
            this.isMoving = true;
        }
        if (keyIsDown(this.rightKey)) {
            this.x += 5;
            this.isMoving = true;
        }


        if (this.isFighting) {
            stickmanFighting.setFrame(this.attackFrame);
            this.currentTexture = stickmanFighting;
        } else if (this.isMoving) {
            this.currentTexture = stickmanWalking;
        } else {
            this.currentTexture = stickmanStanding;
        }
    }

    startFighting() {
        if (!this.isFighting) {
            this.isFighting = true;
            this.attackFrame = 0;
            this.attackFrameCount = 0;
            stickmanFighting.reset();
        }
    }

    display() {
        image(this.currentTexture, this.x, this.y, this.width, this.height);
        textSize(16);
        text(`Health: ${this.health}`, this.x, this.y - 10);
    }
}