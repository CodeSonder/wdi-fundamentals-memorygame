// Hello All My Name is Jorge AKA Corinthian
console.log("Up and Running!");
var myName = "Jorge";
myName = "Corinthian";
/* created an array of cards, created an undefined array for cards in play.
created two variables for cards one and two. pushed both card one and two into cards in play array.
set an if else statement with conditions that if the value of cards chosen is two and cards in play are equal set an alert to match other wise if not equal
set an alert saying sorry try again*/
var cards = ["Queen", "Queen", "King", "King"];
 
var cardsInPlay = [];
 
 function matchCheck() {
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
 alert("Match!");
 } else {
 	alert("Sorry, Try again");
 }
 };

function flipCard(cardId) {
	console.log("User flipped" + " " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	matchCheck();


};

flipCard(0);







 
   
