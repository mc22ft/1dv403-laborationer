"use strict"

	var fName;
	var lName;
	var postNr;
	var eMail;
	var trueORfalse;

var Validator = {

	formArr: [],

	init: function(e){

		var form = document.forms["payForm"];
		var textBox = form.elements["fname"];
		var textbox2 = form.elements["lname"];

		EventUtil.addHandler(textBox, "blur", function(event){
			event = EventUtil.getEvent(event);
			var target = EventUtil.getTarget(event);

			alert("lämnar textboxen");

		

			fName = form.elements["fname"].value;
			if (fName === ""){
				Validator.writeOut(form, 1, "Detta fält får inte lämnas blankt");
			}
			else {
				console.log("P tagg finns");
				var pRemove = form[1].parentNode.childNodes[5];
				pRemove.parentNode.removeChild(pRemove);
			};


		});

			EventUtil.addHandler(form, "submit", function(event){
				console.log("inne i addHandler");
				event = EventUtil.getEvent(event);			
				EventUtil.preventDefault(event);
				//Hämtar från formulär
				Validator.getFormInfo(form);
				//Testar formulär
				Validator.notEmptyTest(form);
				//if true visar popup if false måste justera i formulär
				if (trueORfalse){					
					Validator.popUp(form);
					var buttonA = document.getElementById("buttonAvbryt");
					var buttonB = document.getElementById("buttonOk");

					buttonA.addEventListener("click", function(){
						//Tar bort popup
						var divBlur = document.getElementById("blurDiv");
						divBlur.parentNode.removeChild(divBlur);
						for (var i = form.elements.length - 1; i >= 0; i--) {
							console.log("disable", i);
							form.elements[i].disabled = false;
					};

					});
					buttonB.addEventListener("click", function(){
						//Skcika formul
						for (var i = form.elements.length - 1; i >= 0; i--) {							
							form.elements[i].disabled = false;
					};
						
						form.submit();
					});
				};
		});
	},

	popUp: function(form){
		var body = document.getElementsByTagName("body")[0];		
		var div = document.createElement('div');
		div.setAttribute("id", "blurDiv");
		body.appendChild(div);

		Validator.makePopup(form);
	},

	makePopup: function(form){
		var divBlur = document.getElementById("blurDiv");
		var div = document.createElement('div');
		div.setAttribute("id", "popDiv");
		divBlur.appendChild(div);
		//Texten
		var h3 = document.createElement("h3");
		var h3Text = document.createTextNode("Vänligen bekräfta ditt köp");
		h3.appendChild(h3Text);
		var i;
		var x = 1;
		var divName = document.createElement("div");
		divName.setAttribute("id", "divarrName")
		var ulName = document.createElement("ul");
		var divarrName = document.createElement("div");
		divarrName.setAttribute("id", "divarrName");
		var ularrName = document.createElement("ul");
		//Lista 1
		for (i = 0;this.formArr.length > i  ; i++) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(form[x].name));
			ulName.appendChild(li);
			x++;
		};
		//Lista 2
		for (i = 0;this.formArr.length > i  ; i++) {
			var li = document.createElement("li");	
			li.appendChild(document.createTextNode(this.formArr[i]));
			ularrName.appendChild(li);
			x++;
		};
		var button1 = document.createElement("button");
		var button2 = document.createElement("button");
		button1.setAttribute("type", "button");
		button2.setAttribute("type", "submit");
		button1.setAttribute("class", "btn btn-danger");
		button2.setAttribute("class", "btn btn-success");
		button1.setAttribute("id", "buttonAvbryt");
		button2.setAttribute("id", "buttonOk");
		button1.appendChild(document.createTextNode("Avbryt"));
		button2.appendChild(document.createTextNode("Bekräfta ditt köp"));		
		div.appendChild(h3);
		divName.appendChild(ulName);
		divarrName.appendChild(ularrName);
		div.appendChild(divName);
		div.appendChild(divarrName);
		div.appendChild(button2);
		div.appendChild(button1);

		//Låser formulär
		for (var i = form.elements.length - 1; i >= 0; i--) {			
			form.elements[i].disabled = true;
		};
	},

	getFormInfo: function(form){
		this.formArr.length = 0;		
		fName = form.elements["fname"].value;//här e jag sidan 515 i boken
		lName = form.elements["lname"].value;
		postNr = form.elements["postnumber"].value;
		eMail = form.elements["email"].value;		
		this.formArr.push(fName, lName, postNr, eMail);
	},

	notEmptyTest: function(form){ //Test
		var i;
		var x = 1;
		var test;
		trueORfalse = true;
		
			for (i = 0;this.formArr.length > i  ; i++) {
					//if (x > 4){x = 1};
					if (form[x].parentNode.childNodes[5])
						{
							console.log("P tagg finns");
							var pRemove = form[x].parentNode.childNodes[5];
							pRemove.parentNode.removeChild(pRemove);							
						};

						var idName = form.elements[x].getAttribute("id");
						console.log(idName);
					//Om det är tomt i fälten									
				if (idName == "fname"){
					if (this.formArr[i] === ""){
					Validator.writeOut(form, x, "Detta fält får inte lämnas blankt");
					}
				}
				else if (idName == "lname"){
					if (this.formArr[i] === ""){
					Validator.writeOut(form, x, "Detta fält får inte lämnas blankt");
					}
				}
				else if (idName == "postnumber"){

						if (!/^(?:SE|SE )?(\d{5}|\d{3}(?: |-)\d{2})$/.test(this.formArr[i])) {
						Validator.writeOut(form, x, "Postnummer är inte i rätt format");					
						}
				}
				else if (idName == "email"){

						if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(this.formArr[i])){
						Validator.writeOut(form, x, "Du måste ange en gilltig email adress");						
						}
				};				
				x++;
			};			
	},

	writeOut: function (form, x, string){
		var inPutString = string;
		var input = form[x].parentNode;
					var p = document.createElement("p");
					var text = document.createTextNode(inPutString);
					p.appendChild(text);
					input.appendChild(p);				
					trueORfalse = false;
	},

};

//Jag gick efter boken med eventUtil. skulle nog inte gjort så från början

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
	getTarget: function(event){
		return event.target || event.srcElement;
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