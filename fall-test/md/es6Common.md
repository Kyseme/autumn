node的module遵循CommonJS规范，requirejs遵循AMD，seajs遵循CMD.CommonJS出现的时间最早,用在服务器端，所有模块放在本地硬盘，可以实现同步加载，之后出AMD,适用在客户端的异步加载，接着是CMD，按需加载，最后是ES6。

ES6模块与CommonJS模块的区别

两者有两个主要差异
- CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用
- CommonJS模块运行时加载，ES6模块编译时输出接口

### CommonJS输出值拷贝
CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个模块文件lib.js的例子。
```javascript
    // lib.js
    var counter = 3;
    function add() {
        counter++;
    }
    module.exports = {
        counter: counter,
        add: add,
    };

    //main.js   执行 node main.js
    var mod = require('./lib');
    console.log(mod.counter);  // 3
    mod.add();
    console.log(mod.counter);   //3
```
上面代码说明，lib.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
```javascript
 // lib.js
    var counter = 3;
    function add() {
        counter++;
    }
    module.exports = {
        get counter(){
            return counter;
        },
        add: add,
    };
```
输出的counter属性实际上是一个取值器函数。现在再执行main.js，就可以正确读取内部变量counter的变动了

```bash
    $ node main.js
    3
    4
```

ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

```javascript
    // lib.js
    export let counter = 3;
    export function add() {
        counter++;
    }

    // main.js
    import { counter, add } from './lib';
    console.log(counter); // 3
    incCounter();
    console.log(counter); // 4
```
ES6输入的模块变量是**只读**的，对它进行重写赋值回报错
```javascript
    // lib.js
    export let obj={};

    // main.js
    import { obj } from './lib';
    obj.name = 'sun';
    obj = {}; //typeError
```
从上面代码中可以看出,可以多obj添加属性，但是重写赋值就会报错，因为变量obj指向的地址是只读的，不能重新赋值，就好比obj是一个**const**变量.

export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例
```javascript
    // mod.js
    function C() {
    this.sum = 0;
    this.add = function () {
        this.sum += 1;
    };
    this.show = function () {
        console.log(this.sum);
    };
    }

    export let c = new C();
```
上面的脚本mod.js，输出的是一个C的实例。不同的脚本加载这个模块，得到的都是同一个实例。
```javascript
    // x.js
    import {c} from './mod';
    c.add();

    // y.js
    import {c} from './mod';
    c.show();

    // main.js
    import './x';
    import './y';

    //babel-node  main.js  1
```
x.js和y.js加载的都是C的同一个实例

### 引入导出方式
导出
```javascript
//CommonJS
module.exports = {
    ....
}

//ES6 export必须导出具有对应关系的变量
export default Hello;   //默认导出项
export {one,two,three...} //导出多项
export function fun() {};
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
export * from …;export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```
es6导出的错误示例

```javascript
    export 1; // 这种导出的内容不是变量是绝对错误的，包括导出表达式，也是绝对错误的
    var a = 1;
    export a;
    function b() {}
    export b;
```
上面的这些方法都是错误的，不能这样导出接口。导出接口仅限两种：

1.声明时导出
2.以对象的形式导出（和解构联系起来）
```javascript
    export 1; 
    var a = 1;
    export {a};//等价于 {a:a}
    function b() {}
    export {b};
```
**default关键字**

在导出模块的时候，经常会用到export default，说白了，它其实是别名的语法糖：

```javascript
    export defalut function a(){}
    //等价于
    function a(){};
    export { a as default};
```
import的时候
```javascript
    import a from '...';
    //等价于
    import { defalut as a} from '....'
```




引入模块
```javascript
    //CommonJS
    var obj = require('object');

    //es6
    import * from '..' //引入所有的导出项，包括export和 export default
    import {name1,name2} from '...'
    import Hello from '...' //引入默认导出项
    import {one as ones,two as twos} //引入项重命名
    //使用export default时，import语句不用使用大括号
```
import和export命令只能在模块的顶层，不能在代码块之中。否则会语法报错

```javascript
    //CommonJS
    var a = 1;
    if(a==2){
        var lib = require('./require/lib')
        console.log(lib.counter);
    }else{
        var tool = require('./require/tool')
        console.log(tool.name);
    }


    //es6
    var a = 1;
    if(a==2){
        import {counter} from '...' //error
    }else{
        import {tool} from '...'
    }
```
所以引入了import()函数。完成动态加载。
import()函数使用的场景 1. 按需加载      2. 条件加载

```javascript
    btn.addEventListener('click', event => {
    import('./dialogBox.js')
        .then(dialogBox => {
            dialogBox.open();
        })
        .catch(error => {
            /* Error handling */
        })
    });

    //条件加载
    if (condition) {
        import('moduleA').then(...);
    } else {
        import('moduleB').then(...);
    }
```


### AMD定义模块
AMD，即 (Asynchronous Module Definition)，这种规范是异步的加载模块，requireJs应用了这一规范。先定义所有依赖，然后在加载完成后的回调函数中执行

AMD在定义模块的需要借助define函数
`define(id?, dependencies?, factory)`
- id:字符串，模块名称(可选)
- dependencies: 是我们要载入的依赖模块(可选)，使用相对路径。注意是数组格式
- factory: 工厂方法，返回一个模块函数

```javascript
    //如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组
    define(['Lib'], function(Lib){
    　　　　function foo(){
    　　　　　　Lib.doSomething();
    　　　　}
    　　　　return {
    　　　　　　foo : foo
    　　　　};
　　});
    // module-file.js for requirejs
    define(function(require, exports, module){
        module.exports = {};
    });
```


### CMD
CMD (Common Module Definition), 是seajs推崇的规范，CMD则是依赖就近，用的时候再require。
```javascript
    define(function(require, exports, module) {
        var clock = require('clock');
        clock.start();
    });
```

AMD和CMD最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。
AMD依赖前置，js可以方便知道依赖模块是谁，立即加载；而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。


参考
- [模块加载](http://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)
- [require和import](http://www.fly63.com/article/detial/148)
- [node](https://www.tangshuang.net/2882.html)