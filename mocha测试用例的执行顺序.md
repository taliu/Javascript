# mocha测试用例的执行顺序
```javascript
'use strict'
const chai = require("chai");
chai.use(require("chai-as-promised"));
const expect = chai.expect;
const _ = require('lodash');
describe('#co.test', function () {
    function getId(id){
        return new Promise(function(resole){
            let time = _.random(1,1000*3)
            setTimeout(function(){
                console.log("id =",id);
                resole(id);
            },time);
        });
    }
    before(function () {
       return getId(1);
    });
    it("it2",function(){
        return getId(2);
    })
    describe("describe4+",function(){
        it("it4",function(){
            return getId(4);
        })
        it("it5",function(){
            return getId(5);
        })
        it("it6",function(){
            return getId(6);
        })
    });

    describe("describe7+",function(){
        it("it7",function(){
            return getId(7);
        })
    });

    describe("describe8+",function(){

        describe("describe9+",function(){
            it("it9",function(){
                return getId(9);
            })
            it("it10",function(){
                return getId(10);
            })
        });
        it("it8",function(){
            return getId(8);
        })

    });

    it("it3",function(){
        return getId(3);
    })
});
```
## 结果：
```
 id = 1
id = 2
    √ it2 (1863ms)
id = 3
    √ it3 (2513ms)
    describe4+
id = 4
      √ it4 (714ms)
id = 5
      √ it5 (2375ms)
id = 6
      √ it6 (376ms)
    describe7+
id = 7
      √ it7 (2158ms)
    describe8+
id = 8
      √ it8 (817ms)
      describe9+
id = 9
        √ it9 (2136ms)
id = 10
        √ it10 (104ms)


  9 passing (14s)

 ```
 
##结论
###最后我们把这四条规则总结一下：
1. describe里的it的非异步部分按它们定义的顺序执行，它们所触发的回调的注册顺序也遵从it的注册顺序
2.  不被describe包裹的部分执行顺序的优先级最高
3. 同一层次的describe执行顺序遵从它们的定义顺序
4. 外层describe的所有it执行优先级高于嵌套的describe
 
