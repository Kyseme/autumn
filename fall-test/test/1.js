// var ponit = {
//     x:0,
//     y:0,
//     moveTo:function(x,y){
//         var moveX = function(x){
//             this.x  = x;
//             console.log(this);
//         };
//         var moveY = function(y){
//             this.y =y;
//         };
//         moveX(x);
//         moveY(y);
//     }
// };
// ponit.moveTo(1,1);
// console.log(ponit.x,ponit.y);
// console.log(x,y);

//节流，如果持续触发事件，每隔一段时间，只执行一次事件


function throttle(fn,wait){
    var timer = null;
    var context,args;
    return function(){
        context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,args);
        },wait);
    };
}

//防抖
function debounce(fn,wait){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function(){
            fn.apply(context,args);
        },wait);
    };
}