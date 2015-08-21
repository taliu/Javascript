 
(function loop(i){
setTimeout(function(){
  removeAD();
  i<1000&&loop(i+1);
},1000*i);
}(0))

 


function removeAD(){
	if(/.*\.qq\.com.*/.test(location.href)){//qq.coms
	   $("div[bosszone='rightAD'],.l_qq_com").remove();
	}
/*	
	if($("iframe")[0]&&location.href.indexOf("jira.jrj.com.cn")==-1){//大多情况下iframe都是广告
		$("iframe").remove();
		console.log("remove tag:iframe");
	}
	
 */    
	$("[class]").each(function(){
	  var classArr= this.className.split(" ");
	  for(var i in classArr){
		var name=classArr[i];
		if(name&&test(name)){//判断为广告就移除
			 $(this).remove();
			 console.log("remove class:"+name);
		}
	  }
	})

	$("[id]").each(function(){
		var id= this.id;
		if(id&&test(id)){//判断为广告就移除
			 $(this).remove();
			 console.log("remove id:"+id);
		}
	});
}

function test(val){
	val=$.trim(val);
	if(isAllow(val)){
	  return false;
	}
	var arr=[
	       "_ad$","^ad_",".*_ad_.*","-ad$","^ad-",".*-ad-.*"//一般广告
	       ,'sinaad.*'//新浪广告
		   ];
	for(var i in arr){
	  if(new RegExp(arr[i],"i").test(val)){
		return true;
	  }
	}
	return false;
}

function isAllow(val){
	var arr=["sina_keyword_ad_area2","hq-ad-ctn","aboutus-ad-ctn"];
	for(var i in arr){
	  if( val==arr[i]){
		return true;
	  }
	}
	return false;
}
