console.log("Up and running!");

let cardsInPlay = [];
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds", 
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts", 
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];

function checkForMath(){
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else 
		alert("Sorry, try again");
}
}

function flipCard (){
	let cardId = cardsInPlay.push(cards[this.getAttribute('data-id')]);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMath();
}

const createBoard = function() {
	for (let i = 0; i<cards.length; ++i) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

function resetBoard() {
	let boardNode = document.getElementById('game-board').children;
	for (let i = 0; i < boardNode.length; ++i) {
		boardNode[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
	/*while (board.hasChildNodes()){
		board.removeChild(board.firstChild)
	};
	createBoard();*/
};

document.querySelector('button').addEventListener('click', resetBoard);

