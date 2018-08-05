

**__proto__和prototype**

`__proto__`
每个JS对象一定对应一个原型对象，并从原型对象继承属性和方法，也成为对象的隐式原型。
```javascript
    var one = {x: 1};
    var two = new Object();
    one.__proto__ === Object.prototype // true
    two.__proto__ === Object.prototype // true
    one.toString === one.__proto__.toString // true
```

**prototype**
首先来说说prototype属性，不像每个对象都有__proto__属性来标识自己所继承的原型，只有函数才有prototype属性。也称为函数的显式原型。
当你创建函数时，JS会为这个函数自动添加prototype属性,值是一个有 constructor 属性的对象，不是空对象。而一旦你把这个函数当作构造函数（constructor）调用（即通过new关键字调用），那么JS就会帮你创建该构造函数的实例，实例继承构造函数prototype的所有属性和方法（实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承）

构造函数，通过prototype来存储要共享的属性和方法，也可以设置prototype指向现存的对象来继承该对象。

对象的__proto__指向自己构造函数的prototype。obj.__proto__.__proto__...的原型链由此产生，包括我们的操作符instanceof正是通过探测obj.__proto__.__proto__... === Constructor.prototype来验证obj是否是Constructor的实例。


**更深一步的讨论**

JS是单继承的，Object.prototype是原型链的顶端，所有对象从它继承了包括toString等等方法和属性。

Object本身是构造函数，继承了Function.prototype;Function也是对象，继承了Object.prototype。这里就有一个_鸡和蛋_的问题：
```javascript
    Object instanceof Function // true
    Function instanceof Object // true
```
> Function本身就是函数，Function.__proto__是标准的内置对象Function.prototype。
> Function.prototype.__proto__是标准的内置对象Object.prototype。


通过图片可以得出
![proto](https://raw.githubusercontent.com/Kyseme/MarkdownPhoto/master/res/jsobj_full.jpg)
- Function.prototype和Function.__proto__都指向Function.prototype，这就是鸡和蛋的问题怎么出现的。
- Object.prototype.__proto__ === null，说明原型链到Object.prototype终止。
```javascript
    Function.prototype ==== Function.__proto__; //true
    function add(){}
    add.prototype.__proto__ ===  Object.prototype; //true
```
