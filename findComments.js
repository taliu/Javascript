var findComments = function(el) {
    var arr = [];
    for(var i = 0; i < el.childNodes.length; i++) {
        var node = el.childNodes[i];
        if(node.nodeType === 8) {
            arr.push(node);
        } else {
            arr.push.apply(arr, findComments(node));
        }
    }
    return arr;
};

var commentNodes = findComments(document);

//筛选出 注释内容 中带有 广告 字符串 的 注释
commentNodes.filter(function(c){ 
   return c.nodeValue.indexOf('广告')!=-1 || c.nodeValue.indexOf('ad')!=-1
   }
)