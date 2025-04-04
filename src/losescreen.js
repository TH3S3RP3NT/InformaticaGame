function LoseScreen (){
    this.setup = function() {
        clear()
        textFont(font);
        textSize(40);
        textAlign(CENTER, CENTER);

    }

    this.draw = function() {
        background(achtergrond);
        fill(0);
        let name1 = getItem('name1');
        let name2 = getItem('name2');
        text("Game Over!", width / 2, height / 2);
        text(`${name1} & ${name2}, ververs de pagina om opnieuw te beginnen`, width / 2, height / 2 + 50);
    }
}
