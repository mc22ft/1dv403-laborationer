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

        renderMessages();

        //Funktion "tryck på knappen"
        function buttomPressed (){

            var texten = document.getElementById("myText");
            var inputText = texten.value;
            console.log(inputText);

            var myMessObj = new Message(inputText, new Date()); //Formatera datumet!!
            var count = messages.push(myMessObj);
            //onsole.log(messages[0].getText()); 
            
            //alert("Nu ska det vara inlagt");
        }       

        //Loopar igenom arrayen- skriver ut samtliga medd med renderMessage
         function renderMessages(){          
           var i;
           for (i = 0; i < messages.length; i++) {
               renderMessage(i);
               //var text = document.createElement("p");
               text.innerHTML = messages[i].getHTMLText();
               //div.appendChild(text);

               };           
        }

         //Ritat upp meddelande strukturen
        function renderMessage(i){
            var div = document.querySelector("#newMessage");           
            
            var li = document.createElement("li");
            var p = document.createElement("p");
            var txt = document.createTextNode(messages[i].getText());            
            
            li.appendChild(p);
            p.appendChild(txt);
            div.appendChild(ul);        

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