function Person(){
    this.name = 'hello';
}
Person.prototype.add = function(){
    console.log('add');
};

var person = new Person();
console.log(person instanceof Person);

Person.prototype.sub = function(){
    console.log('sub');
}

var pers = new Person();
console.log(pers instanceof Person);

for(let i in pers){
    console.log(i);
}
