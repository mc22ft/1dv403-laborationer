"use strict";

//Skapar instans till message
var MessageBoard = {                      //var message = new Message();    
    
    init:function(){

        var messages = [];

        var divBoxNode = document.querySelector("#myBox");
        var textareaNode = divBoxNode.childNodes[1];       

        //Knapp tryck
        var buttomNode = textareaNode.childNodes[3];
        buttomNode.onclick = buttomPressed;

        //Funktion "tryck på knappen"
        function buttomPressed (){  

            var texten = document.getElementById("myText");
            var inputText = texten.value;
            alert(inputText);

            var myMess = new Message(inputText, new Date()); //Formatera datumet!!
            messages.push(myMess);
            //onsole.log(messages[0].getText());
        }


/*
		var mess0 = new Message("Testar om detta funkar på riktigt", new Date());
        var mess1 = new Message("Testar om detta funkar på riktigt", new Date());
        var mess2 = new Message("Testar om detta funkar på riktigt", new Date());
        var mess3 = new Message("Testar om detta funkar på riktigt", new Date());
		
            var count = messages.push(mess0);            
            var count = messages.push(mess1);
            var count = messages.push(mess2);
            var count = messages.push(mess3);
*/
            //console.log();
            //console.log(messages);        
            //alert(mess2.getText());
            //console.log(messages[2].getText()); 
                   /*
            alert(mess);            
		    alert(mess.getText());
            alert(mess.getDate());
            mess.setText("Det gick och ändra texten.");
            alert(mess);
		*/
            }
    };

window.onload = MessageBoard.init;