### 伪类和伪元素区别
本质上的区别是是否创建了新元素,伪类是一种状态，伪元素是一种更加具体的元素

### 如何优化seo

### 函数变量提升
```javascript

    //在提升过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升
    b(); //b
    function b(){
        console.log('a');
    }
     function b(){
        console.log('b');
    }
    var b = 'hello';
```
### 函数节流和防抖

>函数防抖：当调用动作过n毫秒后，才会执行该操作，若在n毫秒内调用此操作，则重新计算执行时间
>函数节流：当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期

防抖函数
```javascript
    function debounce(fn,wait){
        var timer = null;
        return funciton(){
            clearTimeOut(timer);
            timer = setTimeout(() => {
                fn();
            }, wait);
        }
    }

    function _log(){
        console.log(1);
    }
    window.onscroll = debounce(_log,300);


    //升级版
    function _debounce(func,wait,immediate){
        let timeout,result;
        let debounced = function(){
            let context = this;
            let args = arguments;
            if(timeout) clearTimeOut(timeout);
            if(immediate){
                let callNow = !timeout;
                setTimeout(funciton(){
                    timeout = null;
                },wait);
                if(callNow) result = context.apply(context,args);
            }else{
                timeout = setTimeout(function(){
                    func.apply(context,args);
                },wait);
            }
            return result;
        }
        debounced.cancle = function(){
            clearTimeOut(timeout);
            timeout = null;
        }
        return debounced;
    }
```

函数节流
```javascript
    function _throttle(fn,wait,time){
        var previous = null;// 记录上次运行的时间
        var timer = null;
        return funciton(){
            var now = +new Date();
            if(!previous) previous = now;
            //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
            if(now - previous>time){
                clearTimeOut(timer);
                fn();
                previous = now;//// 执行函数后，马上记录当前时间
            }else{
                clearTimeOut(timer);
                timer = setTimeout(funciton(){
                    fn();
                },wait)
            }
        }
    }
    function _log(){
        console.log(1)
    }
    window.onscroll = _debounce(_log,500,2000)
```
函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现