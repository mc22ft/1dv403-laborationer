"use strict";

//konstruktor function
function Message(message, date){

    //Egenskaper Properties för message
    this.getText = function(){
        return message;
        }
    this.setText = function(_text){
        message = _text;                //Göra tester!?!
        }
    
    //Egenskaper Properties för date
    this.getDate = function(){
        return date;
        }
    this.setDate = function(_date){
        date = _date;                               //Göra tester!?!
        }
        
    //Extra kontroll och kör dom genom konstruktorn
    this.setText(message);
    this.setDate(date);    
}

    //prototypes
    Message.prototype.toString = function(){
        return this.getText()+"("+this.getDate()+")";
        };

    //HTML text/date

    Message.prototype.getHTMLText = function() {
    return this.getText.replace(/[\n\r]/g, "<br/>");
    };   

    Message.prototype.getDateText = function(){
        return this.getDate();
    };

    /*
     Message.prototype.getHTMLText = function(){
        var div = document.createElement("div");
        div.setAttribute("\n", "<br/>");      
        
        return this.getMessage();
    }

    */