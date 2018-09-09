var input = {
    a: 1,
    b: [ 1, 2, { c: true }, [ 3 ] ,[{}]],
    d: { e: 2, f: 3 },
    g: null, 
}
/**
 * {
    "a": 1,
    "b[0]": 1,
    "b[1]": 2,
    "b[2].c": true,
    "b[3][0]": 3,
    "d.e": 2,
    "d.f": 3,
    // "g": null,  值为null或者undefined，丢弃
};
 */


console.log(flatten2(input));
function flatten(obj){
    var result = {};

    function recurse(src, prop) {
        var toString = Object.prototype.toString;
        if(src==null) return;
        if (toString.call(src) == '[object Object]') {
            var isEmpty = true;
            for (var p in src) {
                isEmpty = false;
                recurse(src[p], prop ? prop + '.' + p : p);
            }
            if (isEmpty && prop) {
                result[prop] = {};
            }
        } else if (toString.call(src) == '[object Array]') {
            var len = src.length;
            if (len > 0) {
                src.forEach(function (item, index) {
                    recurse(item, prop ? prop + '[' + index + ']' : index);
                });
            } else {
                result[prop] = [];
            }
        } else {
            result[prop] = src;
        }
    }
    recurse(obj,'');

    return result;
}

function flatten2(input){
    var result = {};

    function recurse(src,prop){
        var toString = Object.prototype.toString;
        if(src == null) return;

        //如果是对象
        if(toString.call(src) == '[object Object]'){
            var isEmpty = true;
            for(let p in src){
                isEmpty = false;
                recurse(src[p],prop ? `${prop}.${p}`:p);
            }
            if(isEmpty && prop){
                result[prop] = {};
            }
        }else if(toString.call(src) == '[object Array]'){
            var len = src.length;
            if(len > 0){
                src.forEach((item,index)=>{
                    recurse(item,prop ? `${prop}[${index}]`:index);
                });
            }else{
                result[prop] = [];
            }

        }else{
            result[prop] = src;
        }
    }

    recurse(input,'');
    console.log(result);
    return result;
}