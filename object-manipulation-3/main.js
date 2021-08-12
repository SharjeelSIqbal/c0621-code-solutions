console.log('Lodash is loaded:', typeof _ !== 'undefined');
var rankCards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var suitTypes = ['Spades', 'Clovers', 'Diamond', 'Heart'];
var deck = [];
var matthew = new Player('Matthew');
var bob = new Player('Bob the Builder');
var ernie = new Player('Ernie');
var bert = new Player('Bert');
var players = [matthew, bob, ernie, bert];
function Player(name) {
  this.name = name;
  this.hand = [];
  this.pointTotal = 0;
}
function Card(rank, suit, value) {
  this.rank = rank;
  this.suit = suit;
  this.value = value;
}
function shuffle() {
  deck = [];
  for (var i = 0; i < suitTypes.length; i++) {
    for (var j = 0; j < rankCards.length; j++) {
      var card = new Card(rankCards[j], suitTypes[i], cardValue[j]);
      deck.push(card);
    }
  }
  deck = _.shuffle(deck);
  return deck;
}
function deal(player) {

  for (var i = 0; i < player.length; i++) {
    var hand = [];
    for (var j = 0; j < 2; j++) {
      hand.push(deck[deck.length - 1]);
      deck.pop();
    }
    player[i].hand = hand;
    player[i].pointTotal = hand[0].value + hand[1].value;
  }
  return hand;
}

function play() {
  var highScore = 0;
  var tie = [];
  var winning;
  shuffle();
  deal(players);
  for (var i = 0; i < players.length; i++) {
    if (players[i].pointTotal > highScore) {
      highScore = players[i].pointTotal;
      winning = players[i];
    }
  }
  for (i = 0; i < players.length; i++) {
    if (players[i].pointTotal === highScore) {
      tie.push(players[i]);
    }
  }
  if (tie.length >= 2) {
    players = [];
    for (i = 0; i < tie.length; i++) {
      players.push(tie[i]);
    }
    play();
  } else {
    players = [matthew, bob, ernie, bert];
    console.log(winning);
    return winning;
  }
}
play();
