function  stringFormat(templ,args){
	for(var key in args){
		templ=templ.replace("{"+key+"}",args[key]);
	}
	return templ;
}
