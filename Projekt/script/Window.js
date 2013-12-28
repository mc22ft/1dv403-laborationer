"use strict";

MAINBORD.util.Window = function () { //Skickar in data för info för varj fönser
	//Bygger upp grunden på ett fönster!!!
	//Toppen
	var photoDiv = document.getElementsByClassName("photo")[0];	
	var div = document.createElement("div");
	div.setAttribute("id", "window");
	var img = document.createElement("img");
	img.setAttribute("src", "pics/photo.png")
	var p1 = document.createElement("p");
	p1.setAttribute("id", "p1");
	p1.appendChild(document.createTextNode("Image viewer"));
	var p2 = document.createElement("p");
	p2.setAttribute("id", "p2");
	p2.appendChild(document.createTextNode("x"));
	//Innehållet = mainDiv
	var mainDiv = document.createElement("div");
	mainDiv.setAttribute("id", "mainDiv");
	//Botten
	var p3 = document.createElement("p");
	p3.setAttribute("id", "p3");
	p3.appendChild(document.createTextNode("Footer Loader"));
	
	div.appendChild(img);
	div.appendChild(p1);
	div.appendChild(p2);
	div.appendChild(mainDiv);
	div.appendChild(p3);
	photoDiv.appendChild(div);
	

	//div.style.width = "200px"; Lägger inte till så här, då det kommer i html koden.
	//div.style.height = "300px";
	//div.style.backgroundColor = "red";
}

//MAINBORD.util.Window.prototype.getDiv = function () {
//}