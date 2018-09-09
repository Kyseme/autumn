//模拟出栈和进栈方式
var seque = [1,2,3,4,5];
var out = [4,5,3,1,2];

// isVaild(seque,out);

function isVaild(seque,out){
    var sc = [];
    let j = 0;
    let n = seque.length;
    for(let i=0;i<n;i++){
        sc.unshift(seque[i]);
        while(sc.length>0 && sc[0]==out[j]){
            sc.shift();
            ++j;
        }
    }
    console.log((sc.length>0)?false:true);
    return (sc.length>0)?false:true;
}


function aa(){
    return new Promise((resolve,reject)=>{
        resolve('sunine');
        console.log(123);
    });
}
// async function add(){
//     var ss = await aa();
//     return ss;
// }
// add().then((res)=>{
//     console.log(res);
// })
// add();


//两个类继承一个类   并且继承两个类的原型
// class Man(){
//     Person.call(this);
//     Test.call(this);
// }

function childOne(){
    this.name = "childOne";
    this.age = 12;
}
childOne.prototype.sayName = function(){
    console.log('childOne');
}
function ChildTwo(){
    this.color = 'red';
    this.height = 160;
}
ChildTwo.prototype.print = function(){
    console.log('red');
}

// function middleLayer(){

// }
// middleLayer.prototype = Object.create(childOne.prototype);
// middleLayer.prototype = Object.create(ChildTwo.prototype);


//这个质数进行了一次简单的复制，并没有继承原型
// function minxin(source,target){
//     for(let key in source){
//         if(!(key in target)){
//             target[key] = source[key];
//         }
//     }
// }

function Man(){
    ChildTwo.call(this);
    childOne.call(this);
}
var childone = new childOne();
var childtwo = new ChildTwo();
// Man.prototype = Object.create(middleLayer.prototype);

for(var prop in childOne.prototype){
    Man.prototype[prop] = childOne.prototype[prop];
}
for(var prop in ChildTwo.prototype){
    Man.prototype[prop] = ChildTwo.prototype[prop];
}
var man = new Man();
// minxin(childone,man);
// minxin(childtwo,man);
console.log(childone instanceof Man);
// man.sayName();
// man.print();






// Man.prototype = Object.create(Person.prototype);

// Promise.all([,,]).then(succee,fail)

//
// Promise.waitAllPromiseFinish = function(arr){
    
//     return new Promise((resolve,reject)=>{
//         var args = Array.prototype.slice.call(arr);
//         var len = args.length;
//         var rejects = [];
//         var remain = len;
        
//         function getValue(val,i){
//             try{
//                 if(val && (typeof val ==='objcet') || (typeof val === 'function')){
//                 var then = val.then;
//                 if(typeof then === 'function'){
//                     val.then(function(val){getValue(val,i),function(val){getValue(val,i)}})
//                    }
//                 }
//                 args[i] = val;
//                 if(--remain){
//                     if(rejects.length>0){
//                         reject(rejects);
//                     }else{
//                         resolve(args);
//                     }
//                 }
//             }catch(e){
//                 rejects[i] = args[i];
//             }
//         }
        
//             for(let i =0;i<len;i++){
//                 getValue(args[i],i);
//             }
//         };
        
//     }