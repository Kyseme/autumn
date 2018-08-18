function Parent(name){
    this.name = name || 'parent';
    this.say = function(){}
}
Parent.prototype.toName = function(){

}

function Child(){
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);


var obj = {name:'sqw'};
var fn = function(){
    console.log(this);
}.call(obj)
