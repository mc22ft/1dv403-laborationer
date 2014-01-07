"use strict";

var MAINBORD = MAINBORD || {};
MAINBORD.util = MAINBORD.util || {};
MAINBORD.util.Window = MAINBORD.util.Window || {};
MAINBORD.util.Window.photoWindow = MAINBORD.util.Window.photoWindow || {};

MAINBORD = {
	util: function(){
		//Array som lägger till objekten och tar bort
		//ClickFunktion photo

		var iconPhoto = document.getElementById("photo");
		console.log(iconPhoto);

		iconPhoto.addEventListener("click",function(){
			console.log("Inne i klick");
			var myEmtyWindow = new MAINBORD.util.Window();
			console.log(myEmtyWindow);
			
		});

		
		//var myEmtyWindow2 = new MAINBORD.util.Window();




	},
};
window.onload = MAINBORD.util;


//Ändra bakgrunden http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_backgroundposition