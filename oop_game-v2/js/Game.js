class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }



    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const array = 
        ["On", 
        "Tw", 
        "Th",
        "Fo",
        "Fi"];
        // ["Life is like a box of chocolates", 
        // "There is no trying", 
        // "May the force be with you",
        // "You have to see the matrix for yourself",
        // "Hello World"];
        let phraseArr = [];
        array.forEach(function(currentPhrase, index) {
            phraseArr[index] = new Phrase(currentPhrase);
        });
        return phraseArr;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let random = Math.floor(Math.random() * 5);
        return this.phrases[random];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        $('#overlay').hide();

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const phraseList = document.getElementsByClassName('letter');
        for (let item of phraseList) {
            if (item.classList.contains('show')) {
                return true;
            } else {
                break;
            }
        }
        return false;
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        const hearts = document.querySelectorAll('.tries img');
        for ( let i = 0; i < this.missed; i++) {
            hearts[i].src = "images/lostHeart.png";
        }
        if (this.missed === 5) {
            for ( let i = 0; i < 5; i++) {
                hearts[i].src = "images/liveHeart.png";
            }
            return this.gameOver(false);
            
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if (gameWon) {
            $('#overlay').show();
            $('#game-over-message').text("You Win!");
            $('#overlay').attr('class', 'win');
        } else {
            $('#overlay').show();
            $('#game-over-message').text("You Lose!");
            $('#overlay').attr('class', 'lose');
        }
    };

}

