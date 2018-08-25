//检查两个数组是否一样'abcd' 'adcb';

function deepCopy(obj){
    if(typeof obj=='function'){
        return new Function('return '+obj.toString())();
    }
    if(obj==null || (typeof obj!=='object')){
        return obj;
    }
    var name,value;
    var target = Array.isArray(obj)?[]:{};
    for(name in obj){
        value = obj[name];
        if(Array.isArray(value)||value instanceof Object){
            target[name] = deepCopy(value);
        }else if(typeof value === 'function'){
            target[name] = value;
        }
    }
    return target;
}