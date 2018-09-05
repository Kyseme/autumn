请写出三栏布局。左右固定宽度300px，中间宽度自适应，整理高度自适应。
// 写一下html和css实现
<style>
  .box{
    height:500px;
    font-size:0;
    width:100%;    
  }
  .left{
    display:inline-block;
    width:300px;
    height:100%;
  }
  .right{
    display:inline-block;
    width:300px;
    height:100%;
  }
  .nav{
    display:inline-block;
    width:calc(100% - 600px);
    height:100%;
    margin-left:300px;
    margin-right:300px;
  }
  .box:after{
    content:'';
    display:block;
    clear:both;    
  }
  

.left{ width:300px;height:100%;}
.right{width:300px;height:100%}
.con{flex:1}
.box{display:flex;}
</style>
<div class="box">
  <div class="left"></div>
  <div class="con"></div>
  <div class="right"></div>
</div>
实现一个数组去重
function normalize(arr) {
  var obj = {};
  if(arr==null || arr.length<=0){
    return;
  }
  for(let i=0;i<arr.length;i++){
     let type =typeof arr[i];
     let key = type + arr[i];
     obj[key] = 
    
 key]bj[arr[i]] = 1;
    }
  }
  let results = [];
  for(let key in obj){
    if(obj[key]>1){
      results.push(key);
    }    
  }
  return results;
}

let set = new Set(arr);
let res = Array.from(set);
let r =[];
for(let i=0;i<arr.length;i++){
  let temp = arr.splice(i,1);  
  if(temp.indexOf(arr[i])>0){
     r.push(arr[i]);
  }
}

let arr = [1,2,4,3,'3','s', 3,4];
normalize(arr); // ['1','2','4','3','s',3]


function a(){
var a = 'hello;'
return function(){
return a;
}
}.bind(this,....)
bind









b
ind
function bind() {
var fn= this;
var args = [...arguments].slice(1);
var context = [...arguments].slice(0,1);



return function(args2){
fn.apply(context,args.concat(args2));
};



  
t
his
,

this -- window
this  --- new Object
匿名    window
obj.set()  this -- obj

 
console.log('aaa');
console.log('aaa');

consetTimeout(()=> {console.log('bbb'); }, 0); console.log('ccc');


// callback 
=> promise对象
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
      return new Promise(resolve,reject){
         let f = function(){
           fn.apply(this,args);
         }
         resolve(); 
    }
  }
}