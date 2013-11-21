"use strict";

var persArr = [{name: "Mathias Claesson", age: 35}, {name: "Neo Oskooei Claesson", age: 5}, {name: "Tolou Oskooei", age: 32}];

var makePerson = function(persArr) {
   
    console.log("Testar om det kommer ut");

    //Resultat objekt
    var result = {          
        minAge : getMinAge(),
        maxAge : getMaxAge(),
    avarageAge : getAvarageAge(),
         names : getNames()          
    };

//Får ut minsta åldern
function getMinAge(){            
      persArr.sort(function(a, b){
      return a.age-b.age
      })            
      return persArr[0].age;    
}
//Får ut högsta åldern
function getMaxAge(){            
    var tempMaxArr;
    tempMaxArr = persArr.length;
    return persArr[tempMaxArr];  
}
//Får ut medelåldern
function getAvarageAge(){
    var sum;
    var i;
    for (i = 0; i < persArr.length; i++) {
        sum += persArr[i].age;     
    }
    return sum;                 
}
//Får ut namnen med ", "mellan och i bokstavsordning
function getNames(){
    
}


        //Får ut minsta åldern...
        console.log(persArr[0].age); //TEST
        
        minAge = function outMinAge(){            
            persArr.sort(function(a, b){
            return a.age-b.age
            })            
            return persArr[0].age;    
        }    
        console.log(minAge); //TEST        

        
        maxAge = function outMaxAge(){            
            var tempMaxArr;
            tempMaxArr = persArr.length;
            return persArr[tempMaxArr];  
        }


        var i;    
        for (i = 0; i < persArr.length; i++) {
            console.log(persArr[i].name);
        }
    
        

  

//var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

//var result = makePerson(data);

//console.log(result);