/**(c) Copyright 2015 Zh. All Rights Reserved. 2015-11-15**/
String.prototype.substitute = function(){
	if (!this) return '';
	var args=[];
	if(arguments.length==1&&Array.isArray(arguments[0]))
		args = arguments[0];
	else
		args = arguments;
	var len = args.length;
	var str = this;
	for (var i = 0; i < len; i++)
	{
		str = str.replace(new RegExp("\\{"+i+"\\}", "g"), args[i]);
	}
	return str;
};
String.prototype.strHas = function(str){
	if(this)
		return this.indexOf(str)>-1;
	else
		return false;
};

