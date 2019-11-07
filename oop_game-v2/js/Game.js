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
    ["Life is like a box of chocolates", 
    "There is no trying", 
    "May the force be with you",
    "You have to see the matrix for yourself",
    "Hello World"];
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

}

