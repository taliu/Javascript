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
                console.log(id);
                resole(id);
            },time);
        });
    }
    before(function () {
       return getId(1);
    });
    it("2",function(){
        return getId(2);
    })
    describe("4+",function(){
        it("4",function(){
            return getId(4);
        })
        it("5",function(){
            return getId(5);
        })
        it("6",function(){
            return getId(6);
        })
    });

    describe("7+",function(){
        it("7",function(){
            return getId(7);
        })
    });

    describe("8+",function(){
        it("8",function(){
            return getId(8);
        })

        describe("9+",function(){
            it("9",function(){
                return getId(9);
            })
            it("10",function(){
                return getId(10);
            })
        });

    });

    it("3",function(){
        return getId(3);
    })
});
```
## 结果：
```
 1
 2
 √ 2 (4228ms)
 3
 √ 3 (2356ms)
 4+
 4
 √ 4 (4810ms)
 5
 √ 5 (2704ms)
 6
 √ 6 (3991ms)
 7+
 7
 √ 7 (818ms)
 8+
 8
 √ 8 (4564ms)
 9+
 9
 √ 9 (4900ms)
 10
 √ 10 (4988ms)


 9 passing (36s)
 ```
 
##结论
###最后我们把这四条规则总结一下：
1. describe里的it的非异步部分按它们定义的顺序执行，它们所触发的回调的注册顺序也遵从it的注册顺序
2.  不被describe包裹的部分执行顺序的优先级最高
3. 同一层次的describe执行顺序遵从它们的定义顺序
4. 外层describe的所有it执行优先级高于嵌套的describe
 
