"use strict"

function Memory(random){	//Konstruktor function

	//Egenskaper dör random
	this.getRandom = function () {
		return random;
	},

	this.setRandom = function (_random) {
		random = _random;
	},

	this.setRandom(random);

}

