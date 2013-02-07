function HumanMetabolism() {

	this.complexion;
	this.skinny = 1;
	this.fatty = 0;
	this.athletic = 2;
	this.morbid = 3;

	this.getDailyCalories = function() {
		var calories = 0;
		switch(this.complexion) {
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
		this.complexion = aComplexion;
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};