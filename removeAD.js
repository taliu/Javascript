
setTimeout(function(){
  removeAD();
},1000);

function removeAD(){
	if(/.*\.qq\.com.*/.test(location.href)){//qq.coms
	   $("div[bosszone='rightAD'],.l_qq_com").remove();
	}
	
	//$("iframe").remove();

	$("[class]").each(function(){
	  var classArr= this.className.split(" ");
	  for(var i in classArr){
		var name=classArr[i];
		if(name&&test(name)){//判断为广告就移除
			 $(this).remove();
		}
	  }
	})

	$("[id]").each(function(){
		var id= this.id;
		if(id&&test(id)){//判断为广告就移除
			 $(this).remove();
		}
	});
}

function test(val){
	val=$.trim(val);
	var arr=["_ad$","^ad_",".*_ad_.*","-ad$","^ad-",".*-ad-.*"];
	for(var i in arr){
	  if(new RegExp(arr[i],"i").test(val)){
		return true;
	  }
	}
	return false;
}

