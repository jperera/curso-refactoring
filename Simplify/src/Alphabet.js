

function Letter(letter) {
	this.letter = letter;

	this.toCaps = function() {
		return this.letter.toUpperCase();
	};

	this.toLower = function() {
		return this.letter.toLowerCase();
	};

}


function Alphabet() {

	this.giveMeAn = function(letter) {
		if (letter.length!==1) return null; 
		return new Letter(letter);
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
}

function QuixoteWriter() {

	this.alphabet = new Alphabet();
	this.display = '';

	this.typeUpperCased = function(userInput) {
		this.lastLetter = this.alphabet.giveMeAn(userInput);
		if (this.lastLetter !== null) {
			this.display += this.lastLetter.toCaps();
		}
	};

	this.getDisplayContent = function() {
		return this.display;
	};

}