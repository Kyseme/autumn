/**实现js的继承 */

function Parent(name){
    this.name = name || 'parent';
    this.names = ['one','two','three'];
    this.teacher = function(){
        console.log(`${this.name}teach`);
    }
}
Parent.prototype.toName = function(){
    console.log(this.name);
}

//原型链继承
/* function Child(){
}
Child.prototype = new Parent();
Child.prototype.name ='child';
var child = new Child();
child.toName();
child.names.push('four');
var child2 = new Child();
console.log(child2.names)
console.log(child instanceof Parent)
console.log(child.__proto__=== Child.prototype)
var child = new Child(); */


//引用的实例会被所有实例共享
//构造继承

/* function Child(name){
    Parent.call(this);
    console.log(this)
    this.name = name || 'child';
}
var child = new Child();
child.names.push('four');
console.log(child.names)
var child2 = new Child();
console.log(child2.names)
console.log(child instanceof Parent) //false
console.log(child.teacher()) */

//组合继承

/* function Child(name){
    Parent.call(this);
    this.name = name || 'child';
}
Child.prototype = new Parent();
var child = new Child();
console.log(child)
child.names.push('four');
console.log(child.names)
var child2 = new Child();
console.log(child2.names)
console.log(child instanceof Parent) */

/* function Child(){
    Parent.call(this);
}
//将父类原型上的方法拷贝后赋给Child.prototype
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
var child = new Child();
console.log(child)
child.names.push('four');
console.log(child.names)
var child2 = new Child();
console.log(child2.names)
console.log(child instanceof Parent)  */

/* class Parent1{
    constructor(){
        this.names = ['one','two','three']
    }
    greet(sound){
        console.log(sound);
    }
}
class Child1 extends Parent1{
    constructor(){
        super();
    }
}

var child = new Child1();
console.log(child);
child.names.push('four');
console.log(child.names);
var child2 = new Child1();
console.log(child2.names)
console.log(child instanceof Parent1) //true */

/* function Child(){
    Parent.call(this);
}
(function(){
    //创建一个没有实例方法的类
    var SuperClass = function(){};
    SuperClass.prototype = Parent.prototype;
    //将实例作为子类的原型
    Child.prototype = new SuperClass();
})()
console.log(Child.prototype.constructor)
var child = new Child();
child.names.push('four');
child.toName() //error  只能继承父类的实例属性和方法，不能继承原型属性/方法
console.log(child.names);// ['one','two','three','four'];
var child1 = new Child();
console.log(child1.names);// ['one','two','three'];
 */
