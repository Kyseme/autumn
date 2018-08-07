// var mod = require('./require/lib');
// import {counter,add} from './default/lib';
// console.log(mod);
// mod.add();
// console.log(mod.counter);
// console.log(counter);

// add();
// console.log(counter);
// console.log(mod.foo);
// setTimeout(()=>{
//     console.log(mod.foo);
// },20)

var a = 1;
if(a==2){
    var lib = require('./require/lib')
    console.log(lib.counter);
}else{
    var tool = require('./require/tool')
    console.log(tool.name);
}