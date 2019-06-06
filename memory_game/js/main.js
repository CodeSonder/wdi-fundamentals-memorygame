// Hello All My Name is Jorge AKA Corinthian
console.log("Up and Running!");
var myName = "Jorge";
myName = "Corinthian";
/* created an array of cards, created an undefined array for cards in play.
created two variables for cards one and two. pushed both card one and two into cards in play array.
set an if else statement with conditions that if the value of cards chosen is two and cards in play are equal set an alert to match other wise if not equal
set an alert saying sorry try again*/
var cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
 
var cardsInPlay = [];
 
 function matchCheck() {
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
 alert("Match!");
 } else {
 	alert("Sorry, try again");
 }
};
function flipCard(cardId) {
	console.log("User flipped" + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	matchCheck();
	
	


};

flipCard(1);








 
   
