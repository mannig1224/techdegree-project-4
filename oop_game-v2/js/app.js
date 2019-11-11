var game;
document.getElementById("btn__reset").addEventListener("click", function(){
    game = new Game();
    game.startGame();
});

const qwertyDiv = $('#qwerty');
qwertyDiv.on('click',function(event){
    const keyInput = event.target;
    if(keyInput.tagName === 'BUTTON'){
        game.handleInteraction(event.target);
    }
});