
function Car(){

}
Car.prototype.name ='car';

var car = new Car();
console.log(car.name)
car.name = 'hello';
console.log(car.name);
var car2 = new Car();
console.log(car2.name)