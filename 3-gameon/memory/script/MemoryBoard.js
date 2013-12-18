"use strict"

var clickOne;
var clickTwo;
var clickCount = 0;
var classTag;
var oldTarget;
var winCount;
var innerWinCount = 0;
var mainClickCounter = 0;

var MemoryBoard = {

		randomArr: [],		

	init: function () {

		MemoryBoard.startGame();

		MemoryBoard.makeElement();		

		var aLinks = document.getElementsByTagName("a");
		
		for(var i=0;i<aLinks.length;i++){

			aLinks[i].onkeypress = function (e){      			
      			if (clickCount < 3){
      				//e = e.target.childNodes[0];
      				++clickCount;
      				MemoryBoard.clickFunction(e);
      			};
      			return false;
      		};

      		aLinks[i].onclick = function (e){      			
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
	
		var aTagNumber = parseInt(e.target.parentNode.className);
		var oldNodeTarget = e.target;		
		var ArrPlace = MemoryBoard.randomArr[aTagNumber];
		e.target.setAttribute("src", "pics/"+ArrPlace+".png");
		console.log("På plars nummer " +aTagNumber+ " i Arrayen finns detta nummer: "+ArrPlace);
	
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
				++mainClickCounter;			

				if (winCount === innerWinCount){
					var div = document.getElementById("divTable");
					var p = document.createElement("p");
					div.appendChild(p);
					p.innerHTML = "Grattis du klarade av spelet på " + mainClickCounter + " försök!";
				
				};
				//Nollställer räknare 
				clickCount = 0;
			}
			else
				{	//Timer
					clickCount = 3;
					++mainClickCounter;

					setTimeout(function(){						
						oldTarget.setAttribute("src", "pics/0.png");
						e.target.setAttribute("src", "pics/0.png");
						clickCount = 0;
					}, 1000);		
				};			
		};			
	},
		//Gör elementen med bilderna i
	makeElement: function(){
		var div = document.getElementById("divTable");
		var td = document.createElement("td");
		var i;
		var textNode;
		for (i = MemoryBoard.randomArr.length - 1; i >= 0; i--) {		
			var a = document.createElement("a");
			a.className =i;
			a.href="#";		

			var img = document.createElement("img");
			img.setAttribute("src", "pics/0.png");
			img.setAttribute("alt", "?");
			td.appendChild(a);
			a.appendChild(img);
		};

		div.appendChild(td);		
	},

	startGame: function(){

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