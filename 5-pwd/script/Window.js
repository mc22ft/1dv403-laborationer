"use strict";

MAINBORD.util.Window = { //Skickar in data för info för varje fönser
	//Bygger upp grunden på ett fönster!!!
	//Toppen

	
	//div.style.width = "200px"; Lägger inte till så här, då det kommer i html koden.
	//div.style.height = "300px";
	//div.style.backgroundColor = "red";

	//myWindowObj = {};
	photoArray: [],

//Strukturerar upp toma fönstret
	makeEmptyWindow: function(){

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
		var ul = document.createElement("ul");
		ul.setAttribute("id", "innerUl");
		mainDiv.appendChild(ul);

		

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

		MAINBORD.util.Window.photoLinkClicked();
	},

	//AJAX
	photoLinkClicked: function(){
		
		var url = "http://homepage.lnu.se/staff/tstjo/labbyserver/imgviewer/"; 
		
		var myCallback = function(data){
			
			var jsonStr = data;

			MAINBORD.util.Window.photoArray = JSON.parse(jsonStr);

			MAINBORD.util.Window.makeInnerPhoto(); //till att bygga innehållet

		};

		new AjaxCon(url, myCallback);

		return false;
	},

//Strukturerar in innehållet
	makeInnerPhoto: function(myArr){		

		var ul = document.getElementById("innerUl");
		//scroll style på inner div
		

		//var intElemScrollHeight = document.getElementById(id_attribute_value).scrollHeight;

		//var intDivHeight = Math.max(document.getElementById("mainDiv").scrollHeight);
				  			//document.documentElement.clientHeight);
		//console.log(intDivHeight);

		document.getElementById("mainDiv").style.overflow = "auto";
		


		for (var i = MAINBORD.util.Window.photoArray.length - 1; i >= 0; i--) {
			console.log("inne i for loop!!!");

			var li = document.createElement("li");

			//Style på li

			li.style.width = "80px";
			li.style.height = "50px";
			li.style.background = "red";
			li.style.border = "1px solid black";
			//alert(li.style.width);

			var img = document.createElement("img");
			img.setAttribute("src", MAINBORD.util.Window.photoArray[i].thumbURL);
			img.setAttribute("width", MAINBORD.util.Window.photoArray[i].thumbWidth);
			img.setAttribute("height", MAINBORD.util.Window.photoArray[i].thumbHeight);



			


			li.appendChild(img);
			ul.appendChild(li);

			

		};
		

		
	},






};


//MAINBORD.util.Window.prototype.getDiv = function () {
//}