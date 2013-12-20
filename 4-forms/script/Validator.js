"use strict"

	var fName;
	var lName;
	var postNr;
	var eMail;

var Validator = {

	formArr: [],

	init: function(e){

		var form = document.forms["payForm"];

			//var form = getElementById("payForm")

			EventUtil.addHandler(form, "submit", function(event){
				console.log("inne i addHandler");

				event = EventUtil.getEvent(event);
			
				EventUtil.preventDefault(event);
				//Hämtar från formulär
				Validator.getFormInfo(form);

				Validator.notEmptyTest(form); 

				Validator.testPostNumber(form);

				Validator.testEmail(form);

				Validator.popUp(form);

		});
	},

	popUp: function(form){

		var body = document.getElementsByTagName("body")[0];		
		var div = document.createElement('div');
		div.setAttribute("id", "blurDiv"); 
		div.appendChild(body.cloneNode(true)); 
		body.parentNode.replaceChild(div, body);

		Validator.makePopup();


		//sätt en div över direkt under bodu taggen
		//ny div i den nya diven som blir popupen

	},

	makePopup: function(){
		var body = document.getElementsByTagName("body")[0];
		var div = document.createElement('div');
		div.setAttribute("id", "popDiv"); 
		div.appendChild(body.cloneNode(true)); 
		body.parentNode.replaceChild(div, body);

		//Texten
		var h3 = document.createElement("h3");
		var h3Text = document.createTextNode("Vänligen bekräfta ditt köp");
		h3.appendChild(h3Text);
		var xButton = document.createElement("button");
		xButton.setAttribute("type", "submit");
		
		//xButton.setAttribute("id", "closeButton")
		//document.getElementById("closeButton").value="close";
		div.appendChild(h3);
		div.appendChild(xButton);
		


	},

	getFormInfo: function(form){

		this.formArr.length = 0;
		fName = form.elements["fname"].value;//här e jag sidan 515 i boken
		lName = form.elements["lname"].value;
		postNr = form.elements["postnumber"].value;
		eMail = form.elements["email"].value;
		
		this.formArr.push(fName, lName, postNr, eMail);

		console.log(this.formArr);
		

	},

	notEmptyTest: function(form){
		var i;
		var x = 1;
		for (i = 0;this.formArr.length > i  ; i++) {
				console.log(this.formArr[i]);
			


				//Om det är tomt i fälten
			if (this.formArr[i] === ""){
				var input = form[x];
				var p = document.createElement("p");
				var text = document.createTextNode("Detta fält får inte lämnas blankt");
				p.appendChild(text);
				input.appendChild(p);
				//createTextNode.
				console.log(form[x]);
				x++;
			};
		};		
	},

	testPostNumber: function(form){

		
		var str = postNr.replace(" ", "")
		var pattern1 = /se\d{5}|\d{3}-\d{2}/i; //  /s = radbrytning /^[se]?|\d{5}|\d{3}[-]?\d{2}/i
		if(pattern1.test(str)){

			console.log("str: " +str);
			
			//alert(RegExp.lastMatch);

		}
		else
			{
				alert("Ditt post nummer är inte i rätt format!");
			};


	},

	testEmail: function(form){

		//var pattern2 = /^([^.]|\s)(\w|[\-])*?[@][a-zåäö0-9.]+?[a-z]{2,}$/;
		//var pattern3 = /^(?!\.)(\w|-|\.){1,64}(?!\.)[-.a-zåäö-9]{4,253}$/;
		var pattern4 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if(pattern4.test(eMail)) {
			console.log("email funkar bra!")
		}
		else {
			alert("Mail adressen är inte i rätt format!");
		};


	},


};
//form.submit();
//form.reset();

var EventUtil = {    //RemoveHandler sidan 441 i boken

	addHandler: function(element, type, handler){
		if(element.addEventListener){
		   element.addEventListener(type, handler, false);
		}
		else if (element.attachEvent){
			element.attachEvent("on", + type, handler);
		}
		else{
			element["on", + type] = handler;
		}
	},

	
	getEvent: function(event){
		return event ? event :window.event;
	},

	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}
		else{
			event.returnValue = false;
		}
	},
};


window.onload = Validator.init;