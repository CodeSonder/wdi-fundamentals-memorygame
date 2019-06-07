console.log("Up and running!");
var myName = "Jorge"
myName = "Corinthian"

/* create an object cards within an array, provide values for each item
in the array*/
var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];
// create an undefined array named cardsInPlay
var cardsInPlay = [];

 function checkForMatch() {
  /* if two cards are in play check to see if they match, if yes alert
  user and say Match!. if not alert user saying sorry try again.*/
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("Match!");
         

      } else {
          alert("Sorry, try again");
        };

  };

  //create a function named flipCard with no parameters
function flipCard() {
  //variable cardId is the vallue of data-id
    var cardId = this.getAttribute('data-id');
    //add cards to cardsInPlay array by rank and cardId
  cardsInPlay.push(cards[cardId].rank);
  //card image comes from CardElement
 this.setAttribute('src', cards[cardId].cardImage);
// if cards in play array is two check for match
 if (cardsInPlay.length === 2){
    checkForMatch();
    

 };
};

console.log(cardsInPlay);

//create a function named createBoard with no parameters
 function createBoard() {
 //create a variable cardTable assign it name of game-board
  var cardTable = document.getElementById('game-board');
  //run a loop through cards
  for (var i = 0; i < cards.length; i++) {
    //create cardElement variable with img tag
  var cardElement = document.createElement('img');
  //set attribute for cardElement src with value images/back.png
    cardElement.setAttribute('src', 'images/back.png');
    //set attribute data-id with value i
    cardElement.setAttribute('data-id', i);
    /*add an event listener, listening to click and function to do after
    click*/
    cardElement.addEventListener('click', flipCard);
    //add cardElement to parent element cardTable
    cardTable.appendChild(cardElement);

  }
};
//call on the createBoard function
createBoard();

