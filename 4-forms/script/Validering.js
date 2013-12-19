"use strict"

function Validering(fName, lName, postNr, eMail){

	this.getfName = function(){
		return fName;
	}
	this.setfName = function(_fName){
		fName = _fName;
	}

	this.getlName = function(){
		return lName;
	}
	this.setlName = function(_lName){
		lName = _lName;
	}
	this.getpostNr = function(){
		return postNr;
	}
	this.setpostNr = function(_postNr){
		postNr = _postNr;
	}

	this.geteMail = function(){
		return eMail;
	}
	this.seteMail = function(_eMail){
		eMail = _eMail;
	}

	this.setfName(fName);
    this.setlName(lName); 
    this.setpostNr(postNr);
    this.seteMail(eMail); 
	


}