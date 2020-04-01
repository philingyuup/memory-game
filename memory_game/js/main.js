console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMath(){
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else 
		alert("Sorry, try again");
}
}

function flipCard (cardID){
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMath();
}

flipCard(0);
flipCard(1);