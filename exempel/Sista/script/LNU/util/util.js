var LNU = LNU || {};

LNU.util = {

    getElementsByClass:function(name, type)
    {
    
        var r = [];
        
        // Locate the class name (allows for multiple class name)
        var re = new RegExp("(^|\\s)"+ name +"(\\s|$)");
        
        // Limit search by type, or look trough all elements
        var e = document.getElementsByTagName(type || "*");
        for(var j=0; j < e.length; j++)
        {
            // If the element has the class, add it for return
            if(re.test(e[j].className)) 
                r.push(e[j]);
        }
        
        return r;    
    }


};



