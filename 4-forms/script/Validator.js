"use strict"


var Validator = {

	init: function(){

		var form = document.forms["payForm"];

			//var form = getElementById("payForm")

			EventUtil.addHandler(form, "submit", function(event){
				console.log("inne i addHandler");

				event = EventUtil.getEvent(event);
			
				EventUtil.preventDefault(event);

			});

			

	},


};

var EventUtil = {

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