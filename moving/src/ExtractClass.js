function DNI(aDNI) {
	var DNI_CORRECT_LETTER = 'a';
	var INCORRECT_DNI_MESSAGE = 'bad DNI';

	this.DNI = aDNI;
	
	this.validateDNI=function(aDNI){
		var lastPosition = aDNI.length - 1;
		var DNILetter = aDNI[lastPosition];
		var hasCorrectLetter = (DNILetter === DNI_CORRECT_LETTER);
		if (!hasCorrectLetter)
			throw INCORRECT_DNI_MESSAGE;
	};

	this.asString = function() {
		return this.DNI;
	};

	this.validateDNI(aDNI);
	this.DNI=aDNI;
}

function IdentityDocument(aIdentityDocument) {
	var NIE_PREFFIX_LETTER = 'x';
	var INCORRECT_NIE_MESSAGE = 'bad NIE';
	this.DNI='';
	this.aNIE='';

	this.validateNIE = function(aNIE) {
		var firstPosition = 0;
		var NIEPreffixLetter = aNIE[firstPosition];
		var hasCorrectLetter = (NIEPreffixLetter === NIE_PREFFIX_LETTER);
		if (!hasCorrectLetter)
			throw INCORRECT_NIE_MESSAGE;
	};

	this.asString = function() {
		if (this.DNI==='') return this.aNIE;
		return this.DNI.asString();

	};

	try {
		this.validateNIE(aIdentityDocument);
		this.aNIE = aIdentityDocument;
	} catch (exception) {
		this.DNI = new DNI(aIdentityDocument);
	}
}

function Persona() {
	this.name='';
	this.weight='';
	this.height='';
	this.work='';
	this.bloodType='';
	this.DNI='';

	this.setDNI = function(aDNI) {
		this.DNI = new IdentityDocument(aDNI);
	};

	this.getDNI = function() {
		return this.DNI.asString();
	};

	this.gainWeight=function(someKilos){};

	this.looseWeight=function(someKilos){};

	this.changeWork=function(newWork){};
	
	this.newMeasure=function(aHeight){};

	this.computeLetter = function(aDNI) {
		var lastPosition = aDNI.asString().length - 1;
		var DNILetter = aDNI.asString().charAt(lastPosition);

		return DNILetter;
	};

}