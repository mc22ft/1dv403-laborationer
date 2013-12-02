"use strict";

//Skapar instans till message
var message = {                             //var message = new Message(); 
        init:function(){

            //alert("Testat om det hoppar igång!");
            

		var mess = new Message("Testar om detta funkar på riktigt", new Date());
		console.log(mess);
        
            alert(mess);
            
		    alert(mess.getText());
            alert(mess.getDate());
            mess.setText("Det gick och ändra texten.");
            alert(mess);

		





            }
    };      


window.onload = message.init;