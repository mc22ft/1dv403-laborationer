"use strict";
//Skapar instans till message
//var messages = [];

var MessageBoard = {

  messages: [],


  init: function (e) {//e = lysnar på vad anv trycker på
                      //Kan lägga till händelsehanterare E07 tid: 0:53:00
    
    MessageBoard.makeElement();

    var divBoxNode = document.querySelector("#myBox form button");
    //divBoxNode.addEventListener("click", buttomPressed, false);
    //var textareaNode = divBoxNode.childNodes[1];
    //Knapp tryck
    //var buttomNode = textareaNode.childNodes[3];    
    divBoxNode.onclick = function () {
      console.log("onclick");
      MessageBoard.buttomPressed(); //anonym function return false      
      
      return false;
    };

  },

    makeElement: function () {

    var div = document.querySelector("#myBox");
    var p = document.createElement("p");
    p.className = "pCounter";
    p.innerHTML = "Antal meddelande:";
    div.appendChild(p);
    },
    //MessageBoard.counter();


  counter: function () {
    alert("inne i counter");

    document.querySelector("#myBox p").innerHTML = "Antal meddelande:" + MessageBoard.messages.length;
    //var p document.getElementsByClassName("pCounter");
    //p.innerHTML = "Antal meddelande:" + MessageBoard.messages.length;
    //div text = document.getElementsByClassName('pCounter');
    //text.innerHTML = MessageBoard.messages.length;
    
  },

  //Funktion "tryck på knappen"
  buttomPressed: function () {
    console.log("knappt tryckt");
    var texten = document.getElementById("myText");
    var inputText = texten.value;

    var myMessObj = new Message(inputText, new Date()); //Formatera datumet!!
    MessageBoard.messages.push(myMessObj);

    MessageBoard.renderMessages();
    
  },

    //Loopar igenom arrayen- skriver ut samtliga medd med renderMessage
  renderMessages: function () {
    var i;
    
    document.querySelector("#newMessage ul").innerHTML = "";

    for (i = 0; i < MessageBoard.messages.length; i++) {
      MessageBoard.renderMessage(i);
      var text = document.createElement("p");
      //p.innerHTML = messages[i].getText();
           //div.appendChild(text);
    }
  },

     //Ritat upp meddelande strukturen
  renderMessage: function (i) {
    var  ul = document.querySelector("#newMessage ul");
    var li = document.createElement("li");
    var p = document.createElement("p");
    var time = document.createElement("time");
    //var txt = document.createTextNode(messages[i].getText());
    p.innerHTML = MessageBoard.messages[i].getHTMLText();
    time.innerHTML = MessageBoard.messages[i].getDateText();    
    
    p.appendChild(time);
    li.appendChild(p);
    //p.appendChild(txt);

    ul.appendChild(li);
    MessageBoard.counter();
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