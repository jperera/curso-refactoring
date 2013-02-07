function HumanMetabolism() {

	this.complexion = '';
	this.skinny = 1;
	this.fatty = 0;
	this.athletic = 2;
	this.morbid = 3;

	this.getDailyCalories = function() {
		var calories = 0;
		switch(this.complexion.getType()) {
		case 0:
			calories = 1000;
			break;
		case 1:
			calories = 3000;
			break;
		case 2:
			calories = 2000;
			break;
		case 3:
			calories = 500;
			break;
		}
		return calories;
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = Complexion.create(aComplexion);
	};

	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

}

function Complexion(aComplexion) {
	this.type = aComplexion;

	this.getType = function() {
		return this.type;
	};
}

Complexion.create = function(aComplexion) {
	if (aComplexion === HumanMetabolism.skinny) return new Skinny();
	return new Complexion(aComplexion);
};

function Skinny() {
	this.getType = function() {
		return HumanMetabolism.skinny;
	};
}
Skinny.prototype = new Complexion();


