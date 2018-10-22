//数组扁平化
var arr = [1,[2,[3,[4]]]];
// console.log(flatten(arr));
// function flatten(arr){
//     return arr.reduce(function(pre,next){
//         return pre.concat(Object.prototype.toString.call(next)=='[object Array]'?flatten(next):next);
//     },[]);
// }
// console.log(flatten(arr));

// function flat(arr){
//     var temp = [];
//     for(let i=0;i<arr.length;i++){
//         if(Object.prototype.toString.call(arr[i])=='[object Array]'){
//             temp = temp.concat(flat(arr[i]));
//         }else{
//             temp.push(arr[i]);
//         }
//     }
//    return temp;
// }

var input = {
    a:1,
    b:[1,2,{c:true},[3],[{}]],
    d:{e:2,f:3,m:null},
    g:null
};
// flatten(input);
// function flatten(obj){
//     var res = {};
//     function recurse(src,prop){
//         if(src==null) return;
//         let string = Object.prototype.toString;
//         if(string.call(src) == '[object Object]'){
//             var isEmpty = true;
//             for(let p in src){
//                 isEmpty = false;
//                 recurse(src[p],prop?`${prop}.${p}`:`${p}`);
//             }
//             if(isEmpty && prop){
//                 res[prop]={};
//             }
//         }else if(string.call(src)=='[object Array]'){
//             let len = src.length;
//             if(len>0){
//                 src.forEach(function(item,index){
//                     recurse(item,prop?`${prop}[${index}]`:`[${index}]`)
//                 });
//             }else{
//                 res[prop] = [];
//             }
        
//         }else{
//             res[prop] = src;
//         }
//     }
//     recurse(input,'');
//     console.log(res);
// }

// function Parent(){

// }
// function Child(){
//     Parent.call(this);
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;

// function create(obj){
//     function F(){};
//     F.prototype = obj;
//     return new F();
// }


var arr = [1,2,3,['5',6,[7]]];
function flatten(arr){
    return arr.reduce(function(pre,next){
        return pre.concat(Array.isArray(next)?flatten(next):next);
    },[]);
}
// console.log(flatten(arr));

var result = [1,1];
// console.log(firber(5));
console.log(firber(3));
function firber(n){
    if(n<=2) return result[n-1];
    if(n<result.length){
        return result[n-1];
    }
    let s1 = 1;
    let s2 = 1;
    while(n>2){
        let t = s1+s2;
        s1 = s2;
        s2 = t;
        result.push(s2);
        n--;
    }
    console.log(s2);
    console.log(result);
}