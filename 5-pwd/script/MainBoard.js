"use strict";

var MAINBORD = MAINBORD || {};
MAINBORD.util = MAINBORD.util || {};
MAINBORD.util.Window = MAINBORD.util.Window || {};

MAINBORD = {

	

	util: function(){
		//Array som lägger till objekten och tar bort
		//ClickFunktion photo		

		var iconPhoto = document.getElementById("photo");
		
		//Klickar för att skapa ett nytt fönster
		iconPhoto.addEventListener("click", function(){

			MAINBORD.util.Window.makeEmptyWindow();			
				
			
			
		});

		//var myEmtyWindow2 = new MAINBORD.util.Window();

	},

	

};
window.onload = MAINBORD.util;


//Ändra bakgrunden http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_backgroundposition