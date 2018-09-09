function ChildOne(){
    this.name = "childOne";
    this.age = 12;
}
ChildOne.prototype.sayName = function(){
    console.log('childOne');
}
function ChildTwo(){
    this.color = 'red';
    this.height = 160;
}
ChildTwo.prototype.print = function(){
    console.log('red');
}

function Parent(){
    ChildOne.call(this);
    ChildTwo.call(this);
}

var parent = new Parent();
var child = new ChildOne();
var child2 = new ChildTwo();


parent.print();
console.log(child instanceof Parent);