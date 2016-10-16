
// 将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// formatDate(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2016-07-02 08:09:04.423 
// formatDate(new Date(),"yyyy-M-d h:m:s.S")      ==> 2016-7-2 8:9:4.18 
 function formatDate(datetime,fmt) { //author: meizz 
    var o = {
        "M+": datetime.getMonth() + 1, //月份 
        "d+": datetime.getDate(), //日 
        "h+": datetime.getHours(), //小时 
        "m+": datetime.getMinutes(), //分 
        "s+": datetime.getSeconds(), //秒 
        "q+": Math.floor((datetime.getMonth() + 3) / 3), //季度 
        "S": datetime.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (datetime.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")",'i').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
