
--- 

```javascript
var a = {}, b = Object.prototype;
[a.prototype === b, Object.getPrototypeOf(a) === b]
//[false,true]
```
只有 Function 拥有一个 prototype 的属性. 所以 a.prototype 为 undefined.
而 Object.getPrototypeOf(obj) 返回一个具体对象的原型(该对象的内部[[prototype]]值)
Object.prototype === a.__proto__
函数的显式原型指向对象的隐式原型

```javascript
    function f() {}
    var a = f.prototype, b = Object.getPrototypeOf(f);
    a === b //false


    a === Object.getPrototypeOf(new f()) // true
    b === Function.prototype // true

    a //{constructor: ƒ}constructor: ƒ f()__proto__: Object
    b //ƒ () { [native code] }
```

f.prototype 是使用使用 new 创建的 f 实例的原型. 而 Object.getPrototypeOf 是 f 函数的原型.

---

```javascript
    function foo() { }
    var oldName = foo.name;
    foo.name = "bar";
    [oldName, foo.name] //foo foo
```
函数的名字是一个只读属性，不可修改

---

```javascript
    "1 2 3".replace(/\d/g, parseInt) //"1 NaN 3"
```
- parseInt(string, radix)
函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。

> string    要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用ToString抽象操作)。字符串开头的空白符将会被忽略。
> radix 一个介于2和36之间的整数,表示上述字符串的基数。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。
`parseInt('123', 5) // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38`
- str.replace(regexp|substr, newSubStr|function)
如果replace函数传入的第二个参数是函数, 那么这个函数将接受如下参数
- match 首先是匹配的字符串
- p1, p2 .... 然后是正则的分组
- offset match 匹配的index 如 /(\a+)(\b+)/, 那么p1匹配 \a+, p2匹配 \b+.
- string 整个字符串
由于题目中的正则没有分组, 所以等价于
```javascript
    parseInt('1', 0)    //1的十进制为1
    parseInt('2', 2)    //2的2进制报错NaN
    parseInt('3', 4)    // 3*4**0 = 4;
```
---

```javascript
    var lowerCaseOnly =  /^[a-z]+$/;
    [lowerCaseOnly.test(null), lowerCaseOnly.test()]
```
这里 test 函数会将参数转为字符串. 'nul', 'undefined' 自然都是全小写了

---

```javascript
    [,,,].join(", ")   
    [,,,] //[empty × 3]
```
因为javascript 在定义数组的时候允许最后一个元素后跟一个,, 所以这是个长度为3的稀疏数组(这是长度为3, 并没有 0, 1, 2三个属性)

**使用toString()检测对象类型**

可以通过toString() 来获取每个对象的类型。为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为thisArg

```javascript
    var toString = Object.prototype.toString;

    toString.call(new Date); // [object Date]
    toString.call(new String); // [object String]
    toString.call(Math); // [object Math]

    //Since JavaScript 1.8.5
    toString.call(undefined); // [object Undefined]
    toString.call(null); // [object Null]
```
---

```javascript
    var a = {class: "Animal", name: 'Fido'};
    a.class
```
这个和浏览器有关，`class`是保留字，对象在取属性时，推荐a['class']

---

```javascript
    var a = Function.length,
        b = new Function().length
    a === b //false  1===0
```
Function.length定义为1,另外Function原型对象的length属性定义为0

```javascript
    var a = Date(0);
    var b = new Date(0);
    var c = new Date();
    [a === b, b === c, a === c] //false, false, false
```
如果不传参数等价于当前时间;如果是函数调用 返回一个字符串.

```javascript
    var min = Math.min(), max = Math.max()
    min < max  //false
```
Math.min 不传参数返回 Infinity, Math.max 不传参数返回 -Infinity

```javascript
    function foo(a) {
        var a;
        return a;
    }
    function bar(a) {
        var a = 'bye';
        return a;
    }
    [foo('hello'), bar('hello')]  //['hello','bye']
    
```

在两个函数里, a作为参数其实已经声明了,var a 存在变量提升， 所以 var a; var a = 'bye' 其实就是 a; a ='bye'