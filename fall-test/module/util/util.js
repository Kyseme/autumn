//数组拍平
var foo = [1, [2,3], ['4', 5, ['6' ,7,[8]]], [9], 10];
//方法一 全部转化为字符串
foo.toString().split(',');// ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
//方法二 JSON
JSON.parse(`[${JSON.stringify(foo).replace(/\[|]/g, '')}]`);
//方法三
function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
}

//apply方法的实现
function myapply(context){
    var context = context || window;
    context.fn = this;
    var result;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}
//call方法
function mycall(context){
    var context = context || window;
    context.fn = this;
    var arg = [...arguments].slice(1);
    var result = context.fn(...arg);
    delete context.fn;
    return result;
}


