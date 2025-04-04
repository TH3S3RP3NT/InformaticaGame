class Stickman {
    constructor(x, y, color, upKey, leftKey, downKey, rightKey) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 250; // Example width
        this.height = 300; // Example height
        this.isMoving = false; // Track if the Stickman is moving
        this.upKey = upKey;
        this.leftKey = leftKey;
        this.downKey = downKey;
        this.rightKey = rightKey;
        this.currentTexture = stickmanStanding; // Start with standing texture
    }

    update() {
        // Check for movement
        this.isMoving = false; // Reset moving state

        if (keyIsDown(this.upKey)) {
            this.y -= 5; // Move up
            this.isMoving = true;
        }
        if (keyIsDown(this.downKey)) {
            this.y += 5; // Move down
            this.isMoving = true;
        }
        if (keyIsDown(this.leftKey)) {
            this.x -= 5; // Move left
            this.isMoving = true;
        }
        if (keyIsDown(this.rightKey)) {
            this.x += 5; // Move right
            this.isMoving = true;
        }

        // Update the current texture based on movement state
        if (this.isMoving) {
            this.currentTexture = stickmanWalking; // Change to walking texture
        } else {
            this.currentTexture = stickmanStanding;// Change to standing texture
        }
    }

    display() {
        image(this.currentTexture, this.x, this.y, this.width, this.height);
        textSize(16);
        text(`Health: ${this.health}`, this.x, this.y - 10);
    }
}