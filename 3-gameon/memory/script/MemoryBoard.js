"use strict"

var MemoryBoard = {

		randomArr: [],

	init: function () {

		var myArray = [3,4,4,1,2,1,2,3]; 

		console.log(myArray);

		var myRandomArr = RandomGenerator.getPictureArray(4, 4);

		console.log(myRandomArr);

		//Skapa ojekt
		var exmpel = new Memory(myRandomArr);
		console.log(myRandomArr);

		//------ Ovanför detta är bara test!!!!!!!'


		MemoryBoard.makeElement(myRandomArr);


		var aLinks = document.getElementsByTagName("a");
		console.log(aLinks);
		
		for(var i=0;i<aLinks.length;i++){
      		aLinks[i].onclick= function (e){
      			MemoryBoard.clickFunction(e);
      			return false;
      		};
    	}

		
	},
						//---Functioner ---


		//Gör elementen med bilderna i
	makeElement: function(myRandomArr){
		var div = document.getElementById("divTable");
		var td = document.createElement("td");
		var i;
		
		for (i = myRandomArr.length - 1; i >= 0; i--) {			
		var nrPic = myRandomArr[i];
		var a = document.createElement("a");
		a.href="#";
		var img = document.createElement("img");
		img.setAttribute("src", "pics/0.png");
		img.setAttribute("alt", "?");
		//img.src="pics/"+nrPic+".png", img.alt="?";

		td.appendChild(a);
		a.appendChild(img);

		};

		div.appendChild(td);
		console.log(divTable);
	},

	clickFunction: function(e){
		var e = e;
		e.preventDefault();
		console.log(e.target)
	},









};
window.onload = MemoryBoard.init;