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

			//Klickar för att sttäga ett fömsert
			var closeWin = document.getElementById("close");			
			closeWin.addEventListener("click", function(event){

				MAINBORD.util.Window.closeWindow(event);

				return false;

			});
			return false;			
		});

		

		//var myEmtyWindow2 = new MAINBORD.util.Window();

	},

	

};
window.onload = MAINBORD.util;


//Ändra bakgrunden http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_backgroundposition