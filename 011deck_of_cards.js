// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck

function Card(val, name, suit) {
  this.val = val;
  this.name = name;
  this.suit = suit;
}
// print card names
Card.prototype.toString = function () {
  if(this.val == 11 && this.suite == 'Spades')
    return 'Ace of Spaces';
  else
    return this.suit +''+ this.name;
}

function Deck() {
  this.cards = [];
}

Deck.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
Deck.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10', '11']
Deck.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']

Deck.prototype.createAllCards = function () {
  for ( var i = 0; i < Deck.suits.length; i++) {
    for ( var j = 0; j < Deck.names.length; j ++) {
      this.cards.push( new Card( Deck.values[j], Deck.names[j], Deck.suits[i] ) );
    }
  }
}

Deck.prototype.shuffleCards = function(numTimes) {
  if (typeof numTimes !== 'number')
    numTimes = 5;
    var shuffledcards = this.cards;
    var cardCount = shuffledcards.length;
//do the shuffle operation numTimes times.
  for ( var time = 0; time < numTimes ; time ++) {
    for (var idx = 0; idx < cardCount; idx ++) {
      var numToSwap = Math.floor(Math.random() * cardCount);
      var temp = shuffledcards[numToSwap];
      shuffledcards[numToSwap] = shuffledcards[idx];
      shuffledcards[idx] = temp;
    }
  }
}

Deck.prototype.resetCards = function(resetdeck) {
  this.cards.splice(0,this.cards.length);
  for ( var m = 0; m < Deck.suits.length; m++) {
    for ( var n = 0; n < Deck.names.length; n ++) {
      this.cards.push( new Card( Deck.values[n], Deck.names[n], Deck.suits[m] ) );
    }
  }
}

Deck.prototype.dealRandomCard = function() {
  var allCards = this.cards;
  var last_dealt = 0;
  last_dealt = Math.floor(Math.random() * allCards.length) ;
  var randomcard = allCards[last_dealt]
  console.log(randomcard)
  this.cards.splice(last_dealt, 1);
  return randomcard;
}
//Create your Deck of Cards
var deck = new Deck();
deck.createAllCards();
console.log(deck.cards);
console.log('*****new deck*****')
//Shuffle Deck of Cards
deck.shuffleCards();
console.log(deck.cards);
console.log('*****shuffled*****')
//Reset Deck
deck.resetCards();
console.log(deck.cards);
console.log('*****reset*****')
//Deal a random card
deck.dealRandomCard();
console.log('*****random and remove*****')

// The Player should have a name
// The Player should have a hand
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card

function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.sayName = function() {
  console.log('Hi, my name is ' +this.name );
}

Player.prototype.showHand = function() {
  console.log(this.hand);
}

Player.prototype.takeCard = function() {
  this.hand.push(deck.dealRandomCard());
}

Player.prototype.discardCard = function() {
  this.hand.pop();
  console.log(this.hand);
}

var person = new Player("Alex");
person.sayName();
person.showHand();
person.takeCard();
person.takeCard();
person.takeCard();
person.takeCard();
person.takeCard();
person.showHand();
person.discardCard();
