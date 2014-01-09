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
		img.setAttribute("src", "pics/photo.png");
		img.setAttribute("id", "icon");
		var p1 = document.createElement("p");http://www.google.se/imgres?espv=210&es_sm=93&biw=1185&bih=614&tbm=isch&tbnid=KFJV2uXxqiEzWM%3A&imgrefurl=http%3A%2F%2Fwww.iconarchive.com%2Fshow%2Fsleek-xp-software-icons-by-deleket%2FWindows-Close-Program-icon.html&docid=ITJ5LPsGKVyLRM&imgurl=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fdeleket%2Fsleek-xp-software%2F256%2FWindows-Close-Program-icon.png&w=256&h=256&ei=WqvOUprzGIKH4ASb9YFo&zoom=1&ved=0CF8QhBwwBQ&iact=rc&dur=437&page=1&start=0&ndsp=17
		p1.setAttribute("id", "p1");
		p1.appendChild(document.createTextNode("IMAGE VIEWER"));


		//alt a tag
		var imgClose = document.createElement("img");
		imgClose.setAttribute("src", "pics/Close-icon.png");
		imgClose.setAttribute("id", "close");
		


		//var p2 = document.createElement("p");
		//p2.setAttribute("id", "close");
		//p2.appendChild(document.createTextNode("close"));
		//Innehållet = mainDiv
		var mainDiv = document.createElement("div");
		mainDiv.setAttribute("id", "mainDiv");
		//var ul = document.createElement("ul");
		//ul.setAttribute("id", "innerUl");
		//mainDiv.appendChild(ul);

		

		//Botten Load bar
		var imgSpinn = document.createElement("img");
		imgSpinn.setAttribute("id", "imgSpinn");
		//ajax-loader.appendChild(document.createTextNode("Footer Loader"));
		
		div.appendChild(img);
		div.appendChild(p1);

		div.appendChild(imgClose);


		//div.appendChild(p2);
		div.appendChild(mainDiv);
		div.appendChild(imgSpinn);
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

		//var ul = document.getElementById("innerUl");
		//scroll style på inner div
		

		//var intElemScrollHeight = document.getElementById(id_attribute_value).scrollHeight;

		//var intDivHeight = Math.max(document.getElementById("mainDiv").scrollHeight);
				  			//document.documentElement.clientHeight);
		//console.log(intDivHeight);

		document.getElementById("mainDiv").style.overflow = "auto";
		
		var div = document.getElementById("mainDiv");


		for (var i = MAINBORD.util.Window.photoArray.length - 1; i >= 0; i--) {
			console.log("inne i for loop!!!");

			//var li = document.createElement("li");

			//Style på li

			//li.style.width = "80px";
			//li.style.height = "50px";
			//li.style.background = "red";
			//li.style.border = "1px solid black";
			//alert(li.style.width);

			var a = document.createElement("a");
			a.setAttribute("href", MAINBORD.util.Window.photoArray[i].URL);
			var img = document.createElement("img");
			img.setAttribute("src", MAINBORD.util.Window.photoArray[i].thumbURL);
			img.setAttribute("width", MAINBORD.util.Window.photoArray[i].thumbWidth);
			img.setAttribute("height", MAINBORD.util.Window.photoArray[i].thumbHeight);


			a.appendChild(img);
			div.appendChild(a);
			//li.appendChild(a);
			//ul.appendChild(li);

			

		};
		

		
	},

	closeWindow: function (e){		

		var delDiv = document.getElementById("window").remove();

	},





};


//MAINBORD.util.Window.prototype.getDiv = function () {
//}