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







}

