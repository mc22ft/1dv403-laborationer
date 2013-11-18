"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.
        
        // Vid fel, kasta ett undantag med ett meddelande till användaren.        
        try
        {
            if (str.length === 0){
            throw "Försök igen! Du måste skriva in något!!!";
            }
        }
        catch (err)
        {
            return  err; 
        }  
            
        //Funktionen
        
        var myLettersArr = [];       
        myLettersArr = str.split('');   
        var i;
        for (i = 0; i < myLettersArr.length; i++){
            if (myLettersArr[i] == myLettersArr[i].toUpperCase()){               
                myLettersArr[i] = myLettersArr[i].toLowerCase();            
            } 
            else {
                 myLettersArr[i] = myLettersArr[i].toUpperCase();                
            }
        }     
        
        str = myLettersArr.toString();
        str = str.replace(/,/g, '');            
        
		// Returnera den konverterade strängen.
        
        return str;
        
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};