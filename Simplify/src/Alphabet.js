
function Letter(letter) {
	this.letter = letter;

	this.toCaps = function() {
		return this.letter.toUpperCase();
	};

	this.toLower = function() {
		return this.letter.toLowerCase();
	};
}


function NullLetter() {
	this.toCaps = function() {
		return '';
	};

	this.toLower = function() {
		return '';
	};
}


Letter.newNull = function() {
	return new NullLetter();
};

Letter.obtain = function(aLetter) {
	function isSingleLetter() {
		return (aLetter.length === 1);
	}

	if (!isSingleLetter(aLetter)) return Letter.newNull();
	return new Letter(aLetter);
};


function Alphabet() {

	this.giveMeAn = function(aLetter) {
		return Letter.obtain(aLetter);
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
		this.display += this.lastLetter.toCaps();
	};

	this.typeLowerCased = function(userInput) {
		this.lastLetter = this.alphabet.giveMeAn(userInput);
		this.display += this.lastLetter.toLower();
	};

	this.getDisplayContent = function() {
		return this.display;
	};

}