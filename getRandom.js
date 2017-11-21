//获取随机一个字母或数字
function  getRandom( str ){
    return   Math.random().toString(36).substr(2)[0];
};
