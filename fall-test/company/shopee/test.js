// setTimeout(() => {console.log(1)});
//     Promise.resolve().then(() => {
//         console.log(2);
//         Promise.resolve().then(() => {
//             console.log(3);
//         });
//     });
//     console.log(4); 


function Person(name){
    this.name = name;
    return "sunie";
}
var p = new Person('hello');
// console.log(p);
var p2 = Person('hello');
// console.log(p2);

console.log(Person.__proto__ === Function.prototype);