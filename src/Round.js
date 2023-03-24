const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.cards = deck.cards;
    this.turns = 0;
    this.incorrectGuess = [];
    this.currentTurn = '';
    this.currentCard = deck.cards[0];
    this.percentCorrect = '';
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(usersGuess) {
    this.currentTurn = new Turn(usersGuess, this.currentCard);
    this.turns += 1;
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuess.push(this.currentCard.id)
    }
    this.currentCard = this.cards[this.turns];
    return this.currentTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    
    this.percentCorrect = 100 - (this.incorrectGuess.length/this.turns * 100).toFixed(0) + '%';
    console.log(this.percentCorrect)
    return this.percentCorrect;
   
  };

  endRound() {
    this.calculatePercentCorrect()
    console.log(`**Round over!**You answered ${this.percentCorrect} of the questions correctly!`)
    return `**Round over!**You answered ${this.percentCorrect} of the questions correctly!`
  };
};





module.exports = Round;