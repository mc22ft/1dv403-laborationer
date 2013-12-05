"use strict";
//Skapar instans till message
var MessageBoard = {

  messages: [],


  init: function (e) {//e = lysnar på vad anv trycker på
                            //Kan lägga till händelsehanterare E07 tid: 0:53:00
    var divBoxNode = document.querySelector("#myBox");
    var textareaNode = divBoxNode.childNodes[1];

      //Knapp tryck
    var buttomNode = textareaNode.childNodes[3];
    buttomNode.onclick = MessageBoard.buttomPressed;
    //MessageBoard.renderMessages();

  },

      //Funktion "tryck på knappen"
  buttomPressed: function () {   
    var texten = document.getElementById("myText");
    var inputText = texten.value;
    
    var myMessObj = new Message(inputText, new Date()); //Formatera datumet!!
    MessageBoard.messages.push(myMessObj);
    //alert(MessageBoard.message[1].getText());
    //document.getElementById("messageArea").value = "";
  },

    //Loopar igenom arrayen- skriver ut samtliga medd med renderMessage
  renderMessages: function () {
    
    var i;
    for (i = 0; i < MessageBoard.messages.length; i++) {
      MessageBoard.renderMessage(i);
           var text = document.createElement("p");
      p.innerHTML = MessageBoard.messages[i].getText();
           //div.appendChild(text);
    }
  },

     //Ritat upp meddelande strukturen
  renderMessage: function (i) {
    var  div = document.querySelector("#newMessage");

    var li = document.createElement("li");
    var p = document.createElement("p");
    var txt = document.createTextNode(MessageBoard.messages[i].getText());

    li.appendChild(p);
    p.appendChild(txt);

    ul.appendChild(li);

  }

};

window.onload = MessageBoard.init;

    //var Message = {};
    //var messages = [];
    //MessageBoard.messages = [];

    //var mess0 = new Message("Testar om detta funkar på riktigt", new Date());
    //var mess1 = new Message("Testar om detta funkar på riktigt", new Date());
    //MessageBoard.messages.push(mess0, mess1);
    //alert(messages[0].getText());
    //messages[1].getText();
    //MessageBoard.messages[0].getText();
    //alert(MessageBoard.messages[1].getText());