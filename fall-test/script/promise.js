//参数是一个function函数

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
