var LNU = LNU || {};
LNU.util = LNU.util || {};
LNU.util.shape = LNU.util.shape || {};

LNU.util.shape = (function(){

    function Circle() {

        this.radius = 9;
    	
        function sayHello(){
            alert("Hello. Cirkulera...");
        }
    		
        this.getCircumference = function()
        {
            sayHello();
            return 2*Math.PI*this.radius;
        }
    }

    Circle.prototype.getArea = function()
    {
	        return (this.radius * this.radius) * Math.PI;	
    }

    // Statisk metod
    Circle.cloneCircle = function(circle){
        var tmp = new Circle();
        tmp.radius = circle.radius;
        return tmp;
    }

    return { Circle : Circle };
})();