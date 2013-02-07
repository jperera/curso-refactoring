function HumanMetabolism() {

	this.complexion = '';

	this.getDailyCalories = function() {
		return this.complexion.getDailyCalories();
	};

	this.setComplexion = function(complexionType) {
		this.complexion = Complexion.create(complexionType);
	};

	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

}

function Complexion() {
	
}

Complexion.complexionTypes = {0: new Fatty(), 1: new Skinny(), 2: new Athletic(), 3: new Morbid()};

Complexion.create = function(complexionType) {
	var complexion = Complexion.complexionTypes[complexionType];
	if (!complexion) return new NoComplexion();
	return complexion;
};

function NoComplexion() {
	this.getDailyCalories = function() {
		return 0;
	};
}

function Fatty() {
	this.getDailyCalories = function() {
		return 1000;
	};
}

function Skinny() {
	this.getDailyCalories = function() {
		return 3000;
	};
}

function Athletic() {
	this.getDailyCalories = function() {
		return 2000;
	};
}

function Morbid() {
	this.getDailyCalories = function() {
		return 500;
	};
}