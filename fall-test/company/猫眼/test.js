//实现一个数组去重

var arr = [1,2,3,3,'3',5,'5','5'];

function normalize(arr) {
    var obj = {};
    if(arr==null || arr.length<=0){
      return;
    }

    for(let i=0;i<arr.length;i++){
        let type =typeof arr[i];
        let key = type + arr[i];
        if(obj[key]){
            obj[key]++;
        }else{
            obj[key]=1;
        }
    }
    let results = [];
    for (let key in obj) {
        if (obj[key] > 1) {
            results.push(key);
        }
    }
    return results;
  }

  // 数组
  function unique(array){
        var res = [];
        for(let i=0;i<array.length;i++){
            let value = array[i];
            if(res.indexOf(value)===-1){
                res.push(value);
            }
        }
        return res;
  }

  //有排序好的
  function unique(array,sort){
    var res = [];
    var seen = '';
    for(let i=0;i<array.length;i++){
        let value = array[i];
        if(sort){
            if(!i || seen!=value){
                seen = value;
            }
        }else if(res.indexOf(value)===-1){
            res.push(value);
        }
    }
    return res;
}

var array3 = [1, 1, 'a', 'A', 2, 2,'3',3];
//大小字母做一个处理
function unique(arr){
    var res = [];
    for(let i=0;i<arr.length;i++){
        if(!Number(arr[i])) arr[i] = arr[i].toUpperCase();
        if(res.indexOf(arr[i])===-1){
            res.push(arr[i]);
        }
    }
    return res;
}

// console.log(unique(array3));

//bind源码实现 (thisArg[, arg1[, arg2[, ...]]])
Function.prototype.bind2 = function(context){
    if(typeof this !=='function'){
        throw new Error('error');
    }
    var _this = this;
    var args = Array.prototype.slice.call(arguments,1);
    function F(){}
    function fBound(){
        return _this.apply(this instanceof F ? this:context,args.concat(Array.prototype.slice.call(arguments)));
    }
    if(this.prototype){
        F.prototype = this.prototype;
    }
    fBound.prototype = new F();
    return fBound;
};
function add(){
    console.log(this.name);
    console.log(arguments);
}
add.bind2({name:'sunine'},12,32)();

//promise对象
// 将一个回调改成promise
var fs = require("fs");
// readFile的最后一个参数是回调函数，入参是异步执行结果。
fs.readFile("foo.json", "utf8", function(err, content){
    if(err){
        //异常情况
    }else{
        //正常情况
    }
})
// promisify的调用如下
var readFilePromise = promisify(fs.readFile, fs);
readFilePromise('foo.json', 'utf-8').then((res)=>{
    // 正常返回处理
}).catch(err=>{
    // 错误处理
})

readFilePromise('foo.json', 'utf-8') // return promise


function promisify(fn){
  var args = [...arguments].slice(0);
  return (args)=>{
      return new Promise((resolve,reject)=>{
         let f = function(){
           fn.apply(this,args);
         }
         resolve(); 
        });
    }
}