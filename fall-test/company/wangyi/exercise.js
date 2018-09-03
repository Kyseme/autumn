function urlPromise(url,options){

}

//函数防抖
function debounce(fn,wait){
    var timer = null;
    return function(){
        if(timer!=null) clearTimeout(timer);
        timer = setTimeout(fn,wait);
    };
}

//使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
//如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
function throttle(fn,delay){
    var previous = null;// 记录上次运行的时间
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        var now = +new Date();
        var remaining = delay - (now-wait);
        if(previous==null) previous = now;

        if(remaining<=0){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            fn.call(context,args);
            previous = now;
        }else if(!timer){
            timer = setTimeout(function(){
                fn.call(context,args);
            },remaining);
        }
        
    }
}



function log(){
    console.log('log');
}
debounce(log,2000);

