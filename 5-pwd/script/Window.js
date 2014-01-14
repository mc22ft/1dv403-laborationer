"use strict";

MAINBORD.util.Window = { 
	
	photoArray: [],

	//Strukturerar upp tomt fönstret
	makeEmptyWindow: function(){

		//Öppnar fönster om det inte finns ett
		if(!document.getElementById("window")){		

			var photoDiv = document.getElementsByClassName("photo")[0];	
			var div = document.createElement("div");
			div.setAttribute("id", "window");
			var img = document.createElement("img");
			img.setAttribute("src", "pics/photo.png");
			img.setAttribute("id", "icon");
			var p1 = document.createElement("p");//http:www.google.se/imgres?espv=210&es_sm=93&biw=1185&bih=614&tbm=isch&tbnid=KFJV2uXxqiEzWM%3A&imgrefurl=http%3A%2F%2Fwww.iconarchive.com%2Fshow%2Fsleek-xp-software-icons-by-deleket%2FWindows-Close-Program-icon.html&docid=ITJ5LPsGKVyLRM&imgurl=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fdeleket%2Fsleek-xp-software%2F256%2FWindows-Close-Program-icon.png&w=256&h=256&ei=WqvOUprzGIKH4ASb9YFo&zoom=1&ved=0CF8QhBwwBQ&iact=rc&dur=437&page=1&start=0&ndsp=17
			p1.setAttribute("id", "p1");
			p1.appendChild(document.createTextNode("IMAGE VIEWER"));

			//alt a tag
			var imgClose = document.createElement("img");
			imgClose.setAttribute("src", "pics/Close-2-icon.png");
			imgClose.setAttribute("id", "close");
			
			//Innehållet = mainDiv
			var mainDiv = document.createElement("div");
			mainDiv.setAttribute("id", "mainDiv");
			
			//Botten Load bar
			var imgSpinn = document.createElement("img");
			imgSpinn.setAttribute("id", "imgSpinn");
			div.appendChild(img);
			div.appendChild(p1);
			div.appendChild(imgClose);			
			div.appendChild(mainDiv);
			div.appendChild(imgSpinn);
			photoDiv.appendChild(div);

			MAINBORD.util.Window.photoLinkClicked();

		}
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
		//Gör innehållet i photo div scroll bart
		document.getElementById("mainDiv").style.overflow = "auto";		
		var div = document.getElementById("mainDiv");
		var i;		

		for (var i = MAINBORD.util.Window.photoArray.length - 1; i >= 0; i--) {
			
			var a = document.createElement("a");		
			var img = document.createElement("img");
			img.setAttribute("id", "Background");
			img.setAttribute("className", i);
			img.setAttribute("src", MAINBORD.util.Window.photoArray[i].thumbURL);
			img.setAttribute("width", MAINBORD.util.Window.photoArray[i].thumbWidth);
			img.setAttribute("height", MAINBORD.util.Window.photoArray[i].thumbHeight);

			a.appendChild(img);
			div.appendChild(a);
			
			img.onclick = function(e){
					console.log("clickar på en bild för bakgrund");
					MAINBORD.util.Window.clickOnPhoto(e);
					return false;
				};
		};		
	},

	closeWindow: function (e){
		//var delDiv = document.getElementById("window").remove();

		var delDiv = document.getElementById("window");
                    delDiv.parentNode.removeChild(delDiv);

	},

	clickOnPhoto: function(e){		
		var e = e;     
        e.preventDefault();
       
        var newBack = e.target.getAttribute("className");
        var test = MAINBORD.util.Window.photoArray[newBack].URL;		
		var header = document.getElementsByTagName("header")[0];		
		header.style.backgroundImage = "url(" + test + ")";			
	},
};