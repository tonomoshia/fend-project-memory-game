/*
 * Create a list that holds all of your cards
 */
var cards = ['fa fa-diamond', 'fa fa-diamond',
	'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
	'fa fa-anchor', 'fa fa-anchor',
	'fa fa-bolt', 'fa fa-bolt',
	'fa fa-cube', 'fa fa-cube',
	'fa fa-leaf', 'fa fa-leaf',
	'fa fa-bicycle', 'fa fa-bicycle',
	'fa fa-bomb', 'fa fa-bomb'
];

function generateCard(card) {
	let li = document.createElement('li');
	li.classList.add('card');
	let i = document.createElement('i');
	i.className = card;
	li.append(i);
	return li.outerHTML;
}
/*
 * Display the cards on the page
 */

/*
 *   - shuffle the list of cards using the provided "shuffle" method below
 */


//Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function initGame() {
	var deck = document.querySelector('.deck');
	var cardHTML = shuffle(cards).map(function (card) {
		return generateCard(card);
	});
	deck.innerHTML = cardHTML.join('');
}

initGame();

var allCards = document.querySelectorAll('.card');
var openCards = [];

allCards.forEach(function (card) {
	card.addEventListener('click', function (e) {
		if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
			openCards.push(card);
			card.classList.remove('open', 'show');
		}


		if (openCards.length == 2) {
			if (openCards[0].dataset.card == openCards[1].dataset.card) {
				openCards[0].classList.add('match');
				openCards[0].classList.add('open');
				openCards[0].classList.add('show');

				openCards[1].classList.add('match');
				openCards[1].classList.add('open');
				openCards[1].classList.add('show');
				openCards = [];
			} else {
				setTimeout(function () {
					openCards.forEach(function (card) {
						card.classList.add('open', 'show');
					});

					openCards = [];
				}, 500);
			}
		}
	});
});

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */