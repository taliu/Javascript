var Log={
	info:function(msg){
		this._log("info",msg);		
	},
	debug:function(msg){
		this._log("debug",msg);	
	},
	error:function(msg){
		this._log("error",msg);		
	},
        warn:function(msg){
		this._log("warn",msg);	
	},
	_log:function(logType,msg){
		console.log("["+new Date().toString()+"]---"+logType.toUpperCase()+":"+msg);
	}
};

var Test={
	isTrue:function(arg){
		return !!arg;
	}
};
