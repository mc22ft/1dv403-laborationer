"use strict";

var MAINBORD = MAINBORD || {};
MAINBORD.util = MAINBORD.util || {};
MAINBORD.util.Window = MAINBORD.util.Window || {};

MAINBORD = {	

	util: function(){		
		
		MAINBORD.makeElement();

		//ClickFunktion photo
		var iconPhoto = document.getElementById("photo");
		
		//Klickar för att skapa ett nytt fönster
		iconPhoto.addEventListener("click", function(){
			MAINBORD.util.Window.makeEmptyWindow();

			//Klickar för att stäga ett fönster
			var closeWin = document.getElementById("close");

			closeWin.addEventListener("click", function(event){
				
				MAINBORD.util.Window.closeWindow(event);
				
				return false;
			});
			return false;			
		});		

	},
	//Lägger till bakgrunden på skrivbordet
	makeElement: function(){
		var header = document.getElementsByTagName("header")[0];		
		header.style.backgroundImage="url(pics/brick.jpg)";
		document.body.style.backgroundColor="black";		
	},	

};
window.onload = MAINBORD.util;