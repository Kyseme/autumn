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


32.回调地狱知道吗，怎么解决呢

33.异步的解决方案有哪些呢

34.Promise怎么执行一个串行的请求，并行呢？

39.设计模式了解吗，说一下单例模式，观察者模式

40.让你写一个观察者模式你怎么写

4.然后开始聊项目，webpack自己配过吗，gulp呢，两者有什么区别

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