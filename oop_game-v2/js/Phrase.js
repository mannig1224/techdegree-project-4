class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const $phraseUl = $('#phrase ul');
        for( let i = 0; i < this.phrase.length; i++) {
            
            if (this.phrase.charAt(i) === " ") {
                $phraseUl.append(`<li class="hide space"> </li>`);
            } else {
                $phraseUl.append(`<li class="hide letter ${this.phrase.charAt(i)}">${this.phrase.charAt(i)}</li>`);
            }
        }

    };


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        for( let i = 0; i < this.phrase.length; i++) {
            if (letter === this.phrase.charAt(i)) {
                return true;
            } 
        }
        return false;

    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const $list = $(letter);
        $list.forEach(function(item) {
            item.attr('hide', 'show');
          });

    };
        
    
}

