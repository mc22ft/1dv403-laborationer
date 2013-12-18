"use strict"		//Boken 


var Validator = {

	init: function(){

		var form = document.forms["payForm"];

			//var form = getElementById("payForm")

			EventUtil.addHandler(form, "submit", function(event){
				console.log("inne i addHandler");

				event = EventUtil.getEvent(event);
			
				EventUtil.preventDefault(event);
				//Hämtar från formulär
				Validator.getFormInfo(form);
			});
	},

	getFormInfo: function(form){
		var fName = form.elements["f-name"].value;//här e jag sidan 515 i boken
		var lName = form.elements["l-name"].value;
		var postNr = form.elements["postnumber"].value;
		var mail = form.elements["email"].value;
		
		console.log(fName);
		console.log(lName);
		console.log(postNr);
		console.log(mail);
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