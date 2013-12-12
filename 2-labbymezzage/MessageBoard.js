"use strict";

var MessageBoard = {

  messages: [],

  init: function (e) {                   
    
    //Hämtar element
    MessageBoard.makeElement();    

    var divBoxNode = document.querySelector("#myBox form button");
   
    divBoxNode.onclick = function () {    
    MessageBoard.buttomPressed(); //anonym function return false      
    return false;
    };

    
    var texten = document.getElementById("myText");
    
    texten.onkeypress = function (e) {
      var key = e.keyCode;      
      if(key === 13 && e.shiftKey){        
        console.log("shift enter");
        return true;
      }
      if(key === 13){
       
        console.log("enter");
        MessageBoard.buttomPressed();             
        return false;
      }
      
      return true;      
    };    

  },

    
    time: function (e) {
      var e = e;     
      e.preventDefault();      
      
      var className = e.target.parentNode.childNodes[1].className;     
      var arrID = className;     
     
      var arrId = arrID.charAt(arrID.length -1);
      var arridd = parseInt(arrId);

      var fullTime = MessageBoard.messages[arridd].getDateText();
      var nowTime = fullTime.toLocaleTimeString();
      var date = fullTime.getDate();
      //var month = fullTime.getMonth() +1;
      var year = fullTime.getFullYear();

      var d=new Date();
      var month=new Array();
      month[0]="January";
      month[1]="February";
      month[2]="March";
      month[3]="April";
      month[4]="May";
      month[5]="June";
      month[6]="July";
      month[7]="August";
      month[8]="September";
      month[9]="October";
      month[10]="November";
      month[11]="December";
      var n = month[d.getMonth()];
    
      alert("Inlägget skapades den " +date+ " " +n+ " " +year+ " klockan " +nowTime);

    },

    removeMessage: function (e) {
      var nowConfirm = confirm("Vill du verkligen radera meddelandet?");
      if(nowConfirm === true)
      {
        var e = e;     
        e.preventDefault();
        
        //Tar bort elementen
        var className = e.target.parentNode.childNodes[1].className;     
        var arrID = className; 
        var element = document.getElementsByClassName(className);      
        
        element[0].parentNode.parentNode.innerHTML="";      

        //Tar bort från array
        var arrId = arrID.charAt(arrID.length -1)
        var arridd = parseInt(arrId)
 
        this.messages.splice(arridd, 1);

        //Skriva ut alla inlägg igen
        MessageBoard.renderMessages();


        MessageBoard.counter();
      }

    },

    makeElement: function () {

    var div = document.querySelector("#myBox");
    var p = document.createElement("p");
    //p.className = "pCounter";
    p.innerHTML = "Antal meddelande:";
    div.appendChild(p);
    

    },

  counter: function () {   

    document.querySelector("#myBox p").innerHTML = "Antal meddelande:" + MessageBoard.messages.length;
   
  },

  //Funktion "tryck på knappen"
  buttomPressed: function () {
    console.log("knappt tryckt");
    var texten = document.getElementById("myText");
    var inputText = texten.value;
    texten.value = "";
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
    var fullTime = MessageBoard.messages[i].getDateText();
    time.innerHTML = fullTime.toLocaleTimeString(); 
    
    li.appendChild(time);
    li.appendChild(p);

    //länkar in bild i p tag för radering
    var imgClose = document.createElement("img");
    var imgTime = document.createElement("img");        

    li.appendChild(imgClose);
    li.appendChild(imgTime);

    imgClose.src="pic/delete.png";
    imgTime.src="pic/time.png";    
    imgClose.alt="Delete";
    imgTime.alt="Time";
    //Lägger till class för id erase
    var idToPClass = i;
    p.className="pClass"+idToPClass; 
    li.className = "liClass"+idToPClass;

    //kopplar ihop allt 
    ul.appendChild(li);

    //var imgNode = document.querySelector("#newMessage ul li img");

    imgClose.onclick = function (e) {
      //alert("inne i close function");
      MessageBoard.removeMessage(e);
      return false;
    };

    imgTime.onclick = function (e) {
      MessageBoard.time(e);
      return false;
    };
    
    //Uppdaterar meddelande räknaren
    MessageBoard.counter();

  }

};

window.onload = MessageBoard.init;
