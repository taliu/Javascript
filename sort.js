function sort(arr){
  arr.sort(function(a,b){
    if(a>b){
      return 1;
    }else if(a==b){
      return 0;
    }else {
      return  -1;
    }
  });
  return arr;
}

sort([3,2,4,1]);
