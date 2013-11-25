"use strict";

var makePerson = function (persArr) {

    // Lös uppgiften    

    //Resultat objekt
    var result = {};
    
        //Får ut minsta åldern
         persArr.sort(function (a, b) {
             return a.age - b.age;
         });
         result.minAge = persArr[0].age;
     
        //Får ut högsta åldern         
        var tempMaxArr;
        tempMaxArr = (persArr.length -1);
        result.maxAge = persArr[tempMaxArr].age;

        //Får ut medelåldern  och får namnen till arr          
        var sum = 0;
        var i;
        var nameArr = [];
        for (i = 0; i < persArr.length; i++) {
            sum += persArr[i].age;
            nameArr[i] = persArr[i].name;
            }
        result.averageAge = Math.round(sum / persArr.length);        
       
        //Får ut namnen med ", "mellan                 
        
        result.names = nameArr.join(", ");

    //avslutningen

   // console.log(result);
    return result;
};


var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];

var result = makePerson(data);

console.log(result);

//*/