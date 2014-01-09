"use strict";

function AjaxCon (url, callback){

//Hämtar från window och lägger till photona som hämtas från server
//Lägger till function att klicka på en bild så den kommer som backgrund
console.log(url);
console.log(callback);
	var xhr = this.getXHR();

	xhr.onreadystatechange = function(){
		console.log("inne i konstruk");
		if(xhr.readyState === 4)
		{
			if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
			{
				callback(xhr.responseText);
			}
			else
			{
				//FEL!!! ÄNDRA! Bygga ihop med felhanteraren
				console.log("läsfel, status:" + xhr.status);
			}
		}
	};

	xhr.open("get", url, true);
	//xhr.setRequestHeader('If-Modified', 'Mon, 01 Sep 2007 00:00:00 GMT');
	xhr.send(null);
}

AjaxCon.prototype.getXHR = function() {
	var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	} catch (error) {
		try {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (error){
			throw new Error("No XHR object available!");
		}
	}
	return xhr;
};


