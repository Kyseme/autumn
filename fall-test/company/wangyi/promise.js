//三种状态
 const PENDING = 'pending';
 const RESOLVED = 'resolved';
 const REJECTED = 'rejected';


 function Promise(fn){
    let _this = this;
    _this.currentState = PENDING;
    _this.value = undefined;
    _this.resolvedCallbacks = [];
    _this.rejectedCallbacks = [];

    _this.resolve = function(value){
        if(value instanceof Promise){
            return value.then(_this.resolve,_this.reject);
        }
        setTimeout(()=>{
            if(_this.currentState===PENDING){
                _this.currentState = RESOLVED;
                _this.value = value;
                _this.resolvedCallbacks.forEach((item)=>item());
            }
        })
    }

    _this.reject = function(reason){
        setTimeout(()=>{
            if(_this.currentState === PENDING){
                _this.currentState = REJECTED;
                _this.value = reason;
                _this.rejectedCallbacks.forEach((item)=>item());
            }
        })
    }

    try{
        fn(_this.resolve,this.reject);
    }catch(e){
        _this.reject(e);
    }
 };


 Promise.prototype.then = function(onResolved,onRejected){
    var self = this;
    var promise2;
    onResolved = typeof onResolved ==='function'? onResolved : v=>v;
    onRejected = typeof onRejected === 'function'? onRejected : r => {throw r};
 
    if(self.currentState ===RESOLVED){
        return (promise2 = new Promise(function(resolve,reject){
            setTimeout(function(){
                try{
                    var x = onResolved(self.value);
                    resolutionProcedure(promise2,x,resolve,reject);
                }catch(e){
                    reject(e);
                }
               
            });
        }))
    }
}



Promise.prototype.race = function(values){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<values.length;i++){
            values[i].then(resolve,reject);
        }
    });
}

Promise.prototype.all = function(arr){
    return new Promise(function(resolve,reject){
        if(!arr || typeof arr.length === 'undefined'){
            throw new TypeError('Promise.all accepts an array');
        }

        var args = Array.prototype.slice.call(arguments,0);
        if(args.length==0) return resolve([]);
        var remain = args.length;
        function res(i,val){
            try{
                if(val && (typeof val === 'object') || (typeof val ==='function')){
                    var then = val.then;
                     if(typeof then ==='function'){
                        then.call(val,function(val){
                            res(i,val);
                        },reject)
                     }
                    return;
                }
                args[i] = val;
                if(--remain===0){
                    resolve(args);
                }
            }catch(e){
                reject(e);
            }
        }

        for(let i=0;i<args.length;i++){
            res(i,args[i]);
        }
    });
}