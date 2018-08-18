//Module模式使用闭包封装私有状态和组织

var testModule = function(){
    var counter = 0;
    return {
        incrementCounter:function(){
            return ++counter;
        },
        resetCounter:function(){
            console.log(`counter is ${counter}`);
            counter = 0;
        }
    }
}();
testModule.incrementCounter();
testModule.resetCounter();
testModule.resetCounter();

var basketModule = (function(){
    var basket = [];
    //暴露出一个共有的对象
    return {
        addItem:function(values){
            basket.push(values);
        },
        getItemCount:function(){
            return basket.length;
        }
    }
})();