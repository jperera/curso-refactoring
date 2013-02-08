function BirthDay() {

	this.isThereAPartyReadyForMe = function(name, date) {
		var signal = false;
		var chunk=date.split('/')[1];
		
		if (chunk &&(chunk<6 && chunk>4 || chunk==5)){
			this.prepareParty();
			signal=true;
		}
		if(name && (name[0] == 'X' && name[3] == 'i' && (name[2] != 'b'))) {
			signal = (name[1] == 'a');
			if (!(name[0] == 'x')){
				this.prepareParty()
			}
		}
		if(!signal) {
			return 'No party for you';
		} else {
			return 'Party!!!';
		}
	};

	this.prepareParty = function() {};
};


function removeCharacter(chain, character) {
	var i = 0;
	var enc = false;
	var result = '';;

	while(!enc){
		if (chain[i] != character){
			result = result + chain[i];
		}else{
			enc = true;
			result = result + chain.slice(i+1);
		}
		i++;
	}

	return result;
}






function Letter(letter) {
	this.letter = letter;

	this.toCaps = function() {
		return this.letter.toUpperCase();
	};

	this.toLower = function() {
		return this.letter.toLowerCase();
	};

};


function Alphabet() {

	this.giveMeAn = function(letter) {
		return new Letter(letter);
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
};