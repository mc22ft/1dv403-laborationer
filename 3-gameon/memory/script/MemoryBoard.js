"use strict"

var MemoryBoard = {

	init: function () {

		var myArray = [3,4,4,1,2,1,2,3];

		console.log(myArray);

		var myRandomArr = RandomGenerator.getPictureArray(4, 4);

		console.log(myRandomArr);

		//Skapa ojekt
		var exmpel = new Memory(myRandomArr);
		console.log(myRandomArr);


	},
//---Functioner ---











};
window.onload = MemoryBoard.init;