/*请设计一个浏览器中能使用的Promise模块。包含：实现源码，使用API，以及使用Demo */


//定义promise方法
function Promise(fn){
    if(!(this instanceof Promise)|| (typeof fn!=='function')){
        throw new Error('the input params isnot correct')
    }

    this._state = 0;//记录状态
    this._handled = false;//是否处理
    this._value = undefined;//resolve或者reject的返回值
    this._deferreds = [];//存放handle实例对象数组

    doResolve(fn,this);
}

function doResolve(fn,self){
    var done = false;
    try{
        fn(function(value){
            if(done) return;
            done = true;
            resolve(self,value);
        },function(error){
            if(done) return;
            done = true;
            reject(self,error);
        })
    }catch(e){
        if(done) return;
        done = true;
        reject(self,e);
    }
}

Promise.race = function(values){
    return new Promise((resolve,reject)=>{
        for(let i=0,len=values.length;i<len;i++){
            return values[i].then(resolve,reject);
        }
    })
}

Promise.all = function(arr){
    return new Promise((resolve,reject)=>{
        if(!arr || typeof arr.length==='undefined'){
            throw new Error('input is error');
        }
        var args = Array.prototype.slice.call(arr);
        if(args.length===0)return resolve([]);
        let remaining = args.length;
        function res(i,val){
            args[i] = val;
            if(--remaining === 0){
                resolve(args);
            }
        }

        for(let i=0;i<args.length;i++){
            res(i,arg[i]);
        }
    })
}