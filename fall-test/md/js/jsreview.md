### 怎么判断一个对象为空对象呢?
1. `for...in...` 遍历属性
```javascript
    for(let i in obj){
        return true;
    }
    return false;
```
2. 通过 `JSON` 自带的 `stringify()` 方法来判断:
```javascript
    if (JSON.stringify(data) === '{}') {
    return false // 如果为空,返回false
    }
    return true // 如果不为空，则会执行到这一步，返回true
```
3. ES6 新增的方法 `Object.keys()`:
```javascript
    return Object.keys(obj).length===0 
```

### 用过cookie吗，怎么修改cookie呢，除了JS方法还有什么方法呢

1. 客户端通过`document.cookie`来读取和修改cookie信息，如果http头部`set-Cookie`设置了`HttpOnly`则不能通过`document.cookie`来读取cookie信息。
2. 服务端可以在http头部中修改cookie

### 如何遍历一个object对象
 
1. `for ..in`
循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).
```javascript
    var obj = {'0':'a','1':'b','2':'c'};
    for(let key in obj){
        console.log(key,obj[key]);
    }
```
2. `object.keys()`
返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)
```javascript
    var obj = {'0':'a','1':'b','2':'c'};
    Object.keys(obj).forEach(function(key){
        console.log(key,obj[key]);
    });
```
3. `Object.getOwnPropertyNames`
返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
```javascript
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj)); // ["0", "1", "2"]

```

### JS事件：target与currentTarget区别
target在事件流的目标阶段；currentTarget在事件流的捕获，目标及冒泡阶段。只有当事件流处在目标阶段的时候，两个的指向才是一样的， 而当处于捕获和冒泡阶段的时候，target指向被单击的对象而currentTarget指向当前事件活动的对象

- e.target 指向触发事件监听的对象
- e.currentTarget 指向添加监听事件的对象

在页面中点击一个元素，事件是从这个元素的祖先元素中逐层传递下来的，这个阶段为事件的捕获阶段。当事件传递到这个元素之后，又会把事件逐成传递回去，直到根元素为止，这个阶段是事件的冒泡阶段。

我们为一个元素绑定一个点击事件的时候，可以指定是要在捕获阶段绑定或者换在冒泡阶段绑定。 当addEventListener的第三个参数为true的时候，代表是在捕获阶段绑定，当第三个参数为false或者为空的时候，代表在冒泡阶段绑定。
```html
    <div id="a">
        <div id="b">
            <div id="c">
            </div>
        </div>
    </div>

    <script>
        document.getElementById('a').addEventListener('click', function(e) {
            console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
        });    
        document.getElementById('b').addEventListener('click', function(e) {
            console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
        });    
        document.getElementById('c').addEventListener('click', function(e) {
            console.log('target:' + e.target.id + '&currentTarget:' + e.currentTarget.id);
        });    
    </script>
```
上面事件的绑定都是在冒泡阶段的，当我们点击最里层的元素c的时候，会依次输出:
```
    target:c&currentTarget:c
    target:click&currentTarget:b
    target:c&currentTarget:a
```
从输出中我们可以看到，`event.target`指向引起触发事件的元素，而`event.currentTarget`则是事件绑定的元素，只有被点击的那个目标元素的`event.target`才会等于`event.currentTarget`

如果我们把事件都绑定在捕获阶段，然后还是点击最里层的元素c，这时`event.target`还依旧会指向d，因为那是引起事件触发的元素，因为`event.currentTaget`指向事件绑定的元素，所以在捕获阶段，最先来到的元素是a,然后是b,最后是c。所以输出的内容如下：
```
    target:c&currentTarget:a
    target:c&currentTarget:b
    target:c&currentTarget:c
```

### POST传输的数据都有哪些格式呢
- application/x-www-form-urlencoded
- multipart/form-data
- application/json
- text/xml

### weakMap,weakSet和map，set的区别

- WeakSet或WeakMap没有entries,keys,values方法
- 只能用对象作为键

创建和使用这两个类主要是为了性能.WeakSet和WeakMap是弱化的(用对象最为键),没有强引用的键，这使得js的垃圾回收器可以从中清除整个入口。
WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏
### SQL第一范式，第二范式，第三范式，BCNF范式

- 第一范式:每个分量都是不可分的数据项
特点：
  1. 有主键,且主键不能为空
  2. 字段不能再分

- 第二范式:在第一范式的基础上，且每一个主属性完全依赖于主键
特点
  1. 有主键，且主键不能为空
  2. 字段不能再分
  3. 非主键列必须完全依赖于主键

- 第三范式:在第一范式的基础上， 任何非住属性不依赖于其它非主属性(在2NF基础上消除传递依赖)
第三范式(3NF)是第二范式(2NF)的一个子集，即满足第三范式(3NF)必须满足第二范式

- BCNF范式:在满足第三范式的基础上，且不允许主键的一部分被另一部分或其它部分决定
特点
  1. 满足第三范式
  2. 消除表中的多值依赖

### javascript内存泄漏
程序的运行需要内存。只要程序提出要求，操作系统或者运行时(runtime)就必须供给内存。<br>
对于持续运行的服务进程，必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃<br>
不再用到的内存，没有及时释放，就叫做内存泄漏.

**三种常见的JavaScript内存泄漏**

- 意外的全局变量
javascript处理未定义变量的方式比较宽松：为定义的变量会在全局对象创建一个新变量。在浏览器中，全局对象是window
```javascript
    function foo(arg){
        bar = 'this is hidden global variable';
        /*等价于 window.bar = 'this is hidden global variable';
        */
    }
```
函数foo内部忘记使用var,意外创建了一个全局变量，此例泄漏了一个简单的字符串.<br>
另一种意外的全局变量可能由this创建
```javascript
    function foo() {
        this.variable = "potential accidental global";
    }
    // foo 调用自己，this 指向了全局对象（window）
    // 而不是 undefined
    foo();
```
**全局变量注意事项**
我们讨论了一些意外的全局变量，但是仍有一些明确的全局变量产生的垃圾。它们被定义为不可回收(除非定义为空或重新分配)。尤其当全局变量用于临时存储和处理大量信息时。如果必须使用全局变量存储大量数据时，确保用完以后把它设置为null或者重新定义。

- 被遗忘的计时器或回调函数
在js中使用`setInterval`非常平常。
```javascript
    var someResource = getData();
    setInterval(function(){
        let node = document.getElementById('node');
        if(node){
            node.innerHTML = JSON.stringify(someResource);
        }
    },1000);
```
此例说明了什么：与节点或数据关联的计时器不再需要，`node` 对象可以删除，整个回调函数也不需要了。可是，计时器回调函数仍然没被回收（计时器停止才会被回收）。同时，`someResource` 如果存储了大量的数据，也是无法被回收的。


对于观察者的例子，一旦它们不再需要，明确的移除它们非常重要。
```javascript
    var element = document.getElementById('button');
    function onClick(event) {
        element.innerHTML = 'text';
    }
    element.addEventListener('click', onClick);
```

老版本的 IE 是无法检测 DOM 节点与 JavaScript 代码之间的循环引用，会导致内存泄漏。如今，现代的浏览器（包括 IE 和 Microsoft Edge）使用了更先进的垃圾回收算法，已经可以正确检测和处理循环引用了。换言之，回收节点内存时，不必非要调用 removeEventListener 了。

- 闭包
闭包是javascript开发的一个关键方面:匿名函数可以访问父级作用域的变量
```javascript
    var theThing = null;
    var replaceThing = function(){
        var originalThing = theThing;
        var unused = function(){
            if(originalThing){
                console.log('hi');
            }
        }
        theThing = {
            longStr: new Array(1000).join('*'),
            someMethod: function(){
                console.log('method')
            }
        }
    }
    setInterval(replaceThing, 1000);
```

代码片段做了一件事情：每次调用 `replaceThing` ，`theThing` 得到一个包含一个大数组和一个新闭包（someMethod）的新对象。同时，变量 `unused` 是一个引用 `originalThing` 的闭包（先前的`replaceThing`又调用了 `theThing` ）。思绪混乱了吗？最重要的事情是，闭包的作用域一旦创建，它们有同样的父级作用域，作用域是共享的。someMethod 可以通过 theThing 使用，`someMethod `与 `unused`分享闭包作用域，尽管 unused 从未使用，它引用的 `originalThing` 迫使它保留在内存中（防止被回收）。当这段代码反复运行，就会看到内存占用不断上升，垃圾回收器（GC）并无法降低内存占用。本质上，闭包的链表已经创建，每一个闭包作用域携带一个指向大数组的间接的引用，造成严重的内存泄漏。
[参考链接](https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/)

### axios和fetch区别

axios：对ajax进行封装
fetch：一种浏览器原生实现的请求方式

**Axios**
ue2.0之后，尤雨溪推荐大家用axios.Axios本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，从它的官网上可以看到它有以下几条特性：
- 从 node.js 创建 http 请求
- 支持Promise API
- 客户端支持防止CSRF
- 提供一些并发请求的接口
支持防止CSRF，就是每个请求都带一个从cookie中拿到的key，根据浏览器同源策略，假冒的网站是拿不到你cookie中的key，这样，后台就可以轻松辨别这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。
```javascript
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
**Fetch**
一种浏览器原生实现的请求方式,有以下特点
- 符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
- 更好更方便的写法
- 更加底层，提供丰富的API
- 脱离了XHR，是ES规范新的实现方式
- fetch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
- fetch默认不会带cookie，需要添加配置项credentials 
- fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
- fetch没有办法原生监测请求的进度，而XHR可以

```javascript
    fetch('/api/add',{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        },
        credentials:'include',//允许携带cookies  include, same-origin, *omit
        body:JSON.stringify({name:'sun'})
    }).then((response)=>{
        if(response.ok){
            console.log(response.json())
        }else{
            console.log('error');
        }
    }).catch((error)=>{
        console.log(error);
    })
```

### ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）
链接：https://www.nowcoder.com/questionTerminal/9243dd3096a544bfa00daa23d4c5f87a
来源：牛客网

设立"严格模式"的目的，主要有以下几个：
1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
2. 消除代码运行的一些不安全之处，保证代码运行的安全；
3. 提高编译器效率，增加运行速度；
4. 为未来新版本的Javascript做好铺垫。
注：经过测试 IE6,7,8,9 均不支持严格模式。

缺点：
现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。






### MVC和MVVM的特点与区别
MVC分为
- 视图(View)：用户界面
- 控制器(Controller)：业务逻辑
- 模型(Model)：数据保存
view传送指令到controller--->Controller完成业务逻辑，要求model改变状态--->model将新的数据发送到view

MVVM
          View
        /(双向)
ViewModel  <--->   Model
- 各个部分之间的通信都是双向的
- view雨Model不发生联系通过viewmodel传递
- 采用数据的双向绑定
[参考](https://juejin.im/post/593021272f301e0058273468)