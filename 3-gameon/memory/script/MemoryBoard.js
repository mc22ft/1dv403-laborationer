"use strict"

var clickOne;
var clickTwo;
var clickCount = 0;
var classTag;
var oldTarget;
var winCount;
var innerWinCount = 0;

var MemoryBoard = {

		randomArr: [],
		

	init: function () {

		MemoryBoard.startGame();

		console.log(winCount);

		

		MemoryBoard.makeElement();

		

		var aLinks = document.getElementsByTagName("a");
		console.log(aLinks);
		
		for(var i=0;i<aLinks.length;i++){
      		aLinks[i].onclick= function (e){
      			
      			if (clickCount < 3){
      				++clickCount;
      				MemoryBoard.clickFunction(e);
      			};
      			return false;
      		};
    	}

		
	},
						//---Functioner ---

	clickFunction: function(e){		
		
		var e = e;
		e.preventDefault();
		//console.log("Class Namn:");
		//console.log(e.target.parentNode.className);
		
		var aTagNumber = parseInt(e.target.parentNode.className);
		var oldNodeTarget = e.target;			
		
		var ArrPlace = MemoryBoard.randomArr[aTagNumber];

		e.target.setAttribute("src", "pics/"+ArrPlace+".png");
		console.log("På plars nummer " +aTagNumber+ " i Arrayen finns detta nummer: "+ArrPlace);
		//console.log();


		MemoryBoard.compare(ArrPlace, aTagNumber, e, oldNodeTarget);
		

	},

	compare: function(ArrPlace, aTagNumber, e, oldNodeTarget){
		
		
		if (clickCount === 1){
			clickOne = ArrPlace;
			classTag = aTagNumber;
			oldTarget = oldNodeTarget
		};

		if (clickCount === 2){
			clickTwo = ArrPlace;
			
			//if klick på samma nummer
			if (classTag === aTagNumber){
				console.log("Du kan inte klicka på samma bild");
				--clickCount;
				return false;								
			};
			//if klick så det ska funka - click1 = click2 
			if(clickOne === clickTwo){
				++innerWinCount;
				console.log("Grattis! Ett par vänt.")
				
				if (winCount === innerWinCount){
					console.log("Grattis du har vunnit spelet!!!");


					var p = document.createElement("p");
					p.innerHTML = "Grattis du klarade av spelet!";
				
				};
				//Nollställer räknare 
				clickCount = 0;	

			}
			else
				{
					//Timer
					clickCount = 3;
					setTimeout(function(){						
						oldTarget.setAttribute("src", "pics/0.png");
						e.target.setAttribute("src", "pics/0.png");
						clickCount = 0;
					}, 1000);

					//console.log(clickOne);
					//vända tillbaka om det inte är samma		
				};			
		};

		console.log(clickCount);
			
	},


		//Gör elementen med bilderna i
	makeElement: function(){
		var div = document.getElementById("divTable");
		var td = document.createElement("td");
		var i;
		var textNode;

		for (i = MemoryBoard.randomArr.length - 1; i >= 0; i--) {			
		//var nrPic = myRandomArr[i];
		var a = document.createElement("a");
		a.className =i;
		a.href="#";
		//textNode = document.createTextNode("X");
		//a.appendChild(textNode);

		var img = document.createElement("img");
		img.setAttribute("src", "pics/0.png");
		img.setAttribute("alt", "?");
		//img.src="pics/"+nrPic+".png", img.alt="?";

		td.appendChild(a);
		a.appendChild(img);

		};


		div.appendChild(td);
		div.appendChild(p);
		console.log(divTable);

	},

	startGame: function(){

		//var myArray = [3,4,4,1,2,1,2,3]; 

		//console.log(myArray);

		MemoryBoard.randomArr = RandomGenerator.getPictureArray(4, 4);

		console.log(MemoryBoard.randomArr);

		//Skapa ojekt
		var exmpel = new Memory(MemoryBoard.randomArr);
		console.log(MemoryBoard.randomArr);

		//Ställer in räknare så att spelet vet när det är klart.
		winCount = MemoryBoard.randomArr.length / 2;

	},








};
window.onload = MemoryBoard.init;