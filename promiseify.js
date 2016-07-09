
var promiseify = function (fn, obj) {
  return function () {
    var args = [].slice.call(arguments);
    return new Promise(function (resolve, reject) {
      args = args.concat(function (err, val) {
        if (err) {
          reject(err);
        } else {
          resolve(val);
        }
      });
      fn.apply(obj, args);
    });
  };
}

/*
var download=function(url,callback){
  console.log('download ',url);
  callback(null,"download sucess!");
}

download = promiseify(download);
download('http://bing.com')
.then(function(result){
  console.log("result:",result);
})
.catch(function(err){
  console.log("err:",err);
});
*/
