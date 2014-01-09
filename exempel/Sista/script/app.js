var appTester = {

    init: function(){
        if(!document.getElementById) return;
    
        var testElements = LNU.util.getElementsByClass("test");
        
        for(i in testElements)
        {
            testElements[i].style.color = "red";        
        }
        
        var circle1 = new LNU.util.shape.Circle();
        
        var shapeDiv = LNU.util.getElementsByClass("Shape", "div")[0];
                       
        shapeDiv.innerHTML = "Arean av cirkeln: "+circle1.getArea();
		
		
		var rect1 = new LNU.util.shape.Rectangle(10, 20);
		shapeDiv.innerHTML += "<br />Arean av rektangeln: "+rect1.getArea();
    }

}

window.onload = appTester.init;