//观察者模式


//单例模式

// (function getInstance(){
//     var instance;
   
//     return function(){
//         if(!instance){
//             instance = new Object({});
//         }
//         return instance;
//     }
// })()

//观察者模式
// var targetObj = { age:12};
function observer(oldVal,newVal){
    console.log(`oldvalue is ${oldVal} change ${newVal}`)
}

// Object.defineProperty(targetObj,'name',{
//     enumerable:true,
//     configurable:true,
//     get:function(){
//         return name;
//     },
//     set:function(val){
//         observer(name,val);
//         name = val;
//     }
// })

// targetObj.name = 'Martin';


class Targetobj{
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }
}

let targetO = new Targetobj(1, 'Martin');
// let observerProxy = new Proxy(targetO,{
//     set(target, property, value, reciever) {
//         if (property === 'name') {
//             observer(target[property], value);
//         }

//         Reflect.set(target, property, value, reciever);
//     }
// });
// observerProxy.name = 'Lucas';
