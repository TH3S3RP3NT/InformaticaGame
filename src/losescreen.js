function LoseScreen (){
    this.setup = function() {
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);

    }

    this.draw = function() {
        background(achtergrond);
        fill(0);
        let name = getItem('name');
        text("Game Over", width / 2, height / 2);
        text(`${name}, je hebt gefaald!`, width / 2, height / 2 + 50);
        text("Druk op ENTER om opnieuw te beginnen", width / 2, height / 2 + 50);
        if (keyPressed() && keyCode === ENTER) {
            this.sceneManager.showScene(Titlescreen);
        }
    }
}
