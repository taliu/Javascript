
//对HTTP Authentication 登入做服务器端解析和响应。
http.createServer(function(req,resp){
   console.log("[", new Date().toLocaleTimeString(),"]---In comes a " + req.method + " to " + req.url);
   console.log("headers:",req.headers);
   var auth=req.headers['authorization'];//head: authorization: 'Basic 5pa55rOVOmZm'
   if(auth){
	 auth=auth.split(" ")[1];
	 //console.log("auth:",auth);
	 var buff = new Buffer(auth, 'base64');//base64解码
	 var userAndPassword= buff.toString();
	 var arr=userAndPassword.split(":");
	 var username=arr[0];
	 var password=arr[1];
	 if(username=='taliu'&&password=='123'){
		 console.log("用户",username,"登入成功");
		 resp.end(username+",welcome!");
		 return;
	 }
   }
   resp.writeHead(401,{'WWW-Authenticate':'Basic realm="."'});
   resp.end("Unauthorized");
}).listen(1338);
console.log("listen on 1338");
