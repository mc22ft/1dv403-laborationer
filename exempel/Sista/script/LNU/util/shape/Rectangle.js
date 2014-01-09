var LNU = LNU || {};
LNU.util = LNU.util || {};
LNU.util.shape = LNU.util.shape || {};

LNU.util.shape.Rectangle = function(width, height) 
{
   this.width = width;
   this.height = height;
}

LNU.util.shape.Rectangle.prototype.getArea = function()
{
	return (this.width * this.height);	
}

