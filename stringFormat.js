function stringFormat(a,c){var b,d=arguments,e=[],f=0;b=2==d.length&&d[1]&&"object"==typeof d[1]?d[1]:Array.prototype.slice.call(d,1);for(e[f++]in b);return e.length?d[0].replace(RegExp("\\{"+e.join("\\}|\\{")+"\\}","img"),function(a){return b[a.slice(1,-1)]}):d[0]}