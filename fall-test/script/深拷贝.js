function deepCopy(obj){
    if(typeof obj == 'function'){
        return new Function('return '+obj.toString())();
    }
    if(obj==null|| (typeof obj!=='object')){
        return obj;
    }
    var name;
    var value;
    var target = Array.isArray(obj)?[]:{};
    for(name in obj){
        value = obj[name];
        if(value===obj){
            continue;
        }
        if(Array.isArray(value) || value instanceof Object){
            target[name] = deepCopy(value);
        }else if(typeof value == 'function'){
            target[name] = new Function('return '+value.toString());
        }else{
            target[name] = value;
        }

    }
    return target;
}