//参数是一个function函数

// _state	    Number	    0	        Promise内部状态码
// _handled	    Boolean	    false	    onFulfilled,onRejected是否被处理过
// _value	    Any	        undefined	Promise 内部值，resolve 或者 reject返回的值
// _deferreds	Array	    []	        存放 Handle 实例对象的数组，缓存 then 方法传入的回调
/*
_state === 0  // pending
_state === 1  // fulfilled,执行了resolve函数，并且_value instanceof Promise === true
_state === 2  // rejected,执行了reject函数
_state === 3  // fulfilled,执行了resolve函数，并且_value instanceof Promise === false
*/
function Promise(fn){
    if(!(this instanceof Promise)){
        throw new TypeError('Promise must be constructed via new');
    }
    if(typeof fn!=='function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    doResolve(fn,this);
}
function doResolve(fn,self){
    //done变量保护resolve 和 reject只执行一次
    //done在promise.race()函数中有用
    var done = false;

    try{
        //立即执行promise 传入的fn(resolve,reject)
        fn(function(value){
            //resolve回调
            if(done) return;
            done = true;
            resolve(self,value);
        },function(reason){
            //reject回调
            if(done) return;
            done = true;
            reject(self,reason);
        });
    }catch(ex){
        if(done) return;
        done = true;
        reject(self,ex);
    }
}

/**
 * 
 * @param {*} onFulfilled  resolve回调函数
 * @param {*} onRejected    reject回调函数
 * @param {*} promise       下一个promse实例对象
 */
function Handler(onFulfilled,onRejected,promise){
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
}

/**
 * _deferreds数组的意义：当在 Promise 内部调用了异步处理任务时，pro.then(onFulfilled,onRejected)传入的两个函数不会立即执行，
 * 所以此时会把当前的回调和下一个 pro 对象关联缓存起来，待到 resolve 或者 reject触发调用时，
 * 会去 forEach 这个_deferreds数组中的每个 Handle 实例去处理对应的 onFulfilled,onRejected 方法。
 */

 //Promise内部的resolve reject finale方法
 /**
  * 上面说到，doResolve 内部做了 fn 的立即执行，并保证 resolve 和 reject 方法只执行一次，
  * 接下来说说resolve 和 reject 内部具体做了什么
  */


function resolve(self,newValue){
    try{
        //resolve 的值不能为本身this对象
        if(newValue===self){
            throw new Error('A promise cannot be resolved with itself.');
        }
        //针对resolve值为promise对象情况的处理
        if(newValue && (typeof newValue ==='object'|| typeof newValue === 'function')){
            var then = newValue.then;
            if(newValue instanceof Promise){
                self._state = 3;
                self._value = newValue;
                finale(self);
                return ;
            }else if(typeof then === 'function'){
                //对其then方法继续执行doResolve
                doResolve(bind(then,newValue),self);
                return;
            }

        }
        //resolve 正常值的流程 _state = 1
        self._state = 1;
        self._value = newValue;
        finale(self);

    }catch(ex){
        reject(self,e);
    }
}


function reject(self,newValue){
    self._state = 2;
    self._value = newValue;
    finale(self);
}


function finale(self){
//Promise reject 情况，但是 then 方法未提供 reject 回调函数参数 或者 未实现 catch 函数
    if(self._state === 2 && self._deferreds.length===0){
        Promise._immediateFn(function(){
            if(!self._handled){
                Promie._unhandleRejectionFn(self._value);
            }
        });
    }
    for (var i = 0, len = self._deferreds.length; i < len; i++) {
        // 这里调用之前 then 方法传入的onFulfilled, onRejected函数
        // self._deferreds[i] => Handler 实例对象
        handle(self, self._deferreds[i]);
    }
    self._deferreds = null;

}

/**
 * then、catch、finally 方法
第二步，调用 then 方法来处理回调,支持无限链式调用，then 方法第一个参数成功回调，第二个参数失败或者异常回调
 */

 function noop(){}

 Promise.prototype.then = function(onFulfilled,onRejected){
    var prom = new this.constructor(noop);
    handle(this,new Handler(onFulfilled,onRejected,prom));
    return prom;
 };

 Promise.prototype['catch'] = function(){
     return this.then(null,onRejected);
 };

 Promise.prototype['finally'] = function(callback){
     var constructor = this.constructor;
     return this.then(function(value){
        return constructor.resolve(callback()).then(function(){
            return value;
        });
     },function(reason){
        return constructor.resolve(callback()).then(function(){
            return constructor.reject(reason);
        });
     });
 };

 Promise._immediateFn = (typeof setImmediate === 'function' && function(fn){
     setImmediate(fn);
 })|| function(fn){ setTimeoutFunc(fn,0);};

 function handle(self,deferred){
    // 如果当前的self._value instanceof Promise
    // 将self._value => self，接下来处理新 Promise
    while(self._state === 3){
        self = self._value;
    }
    if(self._state===0){
        self._deferreds.push(deferred);
        return ;
    }
    self._handled = true;
    // 通过事件循环异步来做回调的处理
    Promise._immediateFn(function(){
         // deferred.promise ：第一个 Promise then 方法 返回的新 Promise 对象
    // 这里调用下一个 Promise 对象的 then 方法的回调函数
    // 如果当前 Promise resolve 了，则调用下一个 Promise 的 resolve方法，反之，则调用下一个 Promise 的 reject 回调
    // 如果当前 Promise resolve 了，则调用下一个 Promise 的 resolve方法
    // cb回调方法：如果自己有onFulfilled||onRejected方法，则执行自己的方法；如果没有，则调用下一个 Promise 对象的onFulfilled||onRejected
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        // 自己没有回调函数，进入下一个 Promise 对象的回调
        if (cb === null) {
            (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
            return;
        }
        // 自己有回调函数，进入自己的回调函数
        var ret;
        try {
            ret = cb(self._value);
        } catch (e) {
            reject(deferred.promise, e);
            return;
        }
        // 处理下一个 Promise 的 then 回调方法
        // ret 作为上一个Promise then 回调 return的值 => 返回给下一个Promise then 作为输入值
        resolve(deferred.promise, ret);
    });
 }

 Promise.race = function(values){
     return new Promise((resolve,reject)=>{
        for(var i=0,len=values.length;i<len;i++){
            return values[i].then(resolve,reject);
        }
     });
 };

Promise.all = function(arr){
    return new Promise(function(resolve,reject){
        if(!arr || typeof arr.length==='undefined'){
            throw new TypeError('Promise.all accepts an array');
        }
        var args = Array.prototype.slice.call(arr);
        if(args.length===0) return resolve([]);

        var remaining = args.length;
        function res(i,val){
            try{
                // 如果 val 是 Promise 对象的话，则执行 Promise,直到 resolve 了一个非 Promise 对象
                if(val && (typeof val ==='object') || (typeof val === 'function')){
                    var then = val.then;
                    if(typeof then === 'function'){
                        then.call(val,function(val){
                            res(i,val);
                        },reject);
                    }
                    return;
                }
                args[i] = val;
                // 直到所有的 Promise 都执行完毕，则 resolve all 的 Promise 对象，返回args数组结果
                if (--remaining === 0) {
                  resolve(args);
                }
            }catch(e){
                // 只要其中一个 Promise 出现异常，则全部的 Promise 执行退出，进入 catch异常处理
                // 因为 resolve 和 reject 回调有 done 变量的保证只能执行一次，所以其他的 Promise 都不执行
                reject(ex);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
};

var pro = new Promise(function(resolve,reject){
    resolve(100);
});

pro.then((res)=>{
    console.log(res);
});