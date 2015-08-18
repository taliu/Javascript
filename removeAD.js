setTimeout(function(){
if(/.*\.qq\.com.*/.test(location.href)){//qq.coms
	   $("div[bosszone='rightAD'],.l_qq_com").remove();
	}
	
   console.log("删除广告");
  
},1000);
