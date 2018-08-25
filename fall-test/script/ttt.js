// function deepCopy(obj){
//     if(typeof obj == 'function'){
//         return new Function('return ' +obj.toString())();
//     }
//     if(obj==null || (typeof obj!=='object')){
//         return obj;
//     }

//     var name,value;
//     var target  = Array.isArray(obj)?[]:{};

//     for(name in obj){
//         value = obj[name];
//         if(Array.isArray(value) || value instanceof Object){
//             target[name] = deepCopy(value);
//         }else if(typeof value =='function'){
//             target[name] = new Function('return '+value.toString())();
//         }else{
//             target[name] = value;
//         }
//     }
//     return target;
// }

var obj={
    name:'sun',
    arr:[1,2,3,5],
    add:function(){
        console.log(3);
    },
    right:false
}

console.log(deepCopy(obj));
function deepCopy(obj){
    if(obj==null){
        return obj;
	}
    if(!(typeof obj=='object') && !(typeof obj =='function')){
        return obj;
    }
    if(typeof obj=='function'){
        return new Function('return '+obj.toString())();
    }
    var target = Array.isArray(obj)?[]:{};
    var name;
    for(let temp in obj){
        name = obj[temp];
        if(typeof name == 'object'){
            target[temp] = deepCopy(name);
		}else if(typeof name=='function'){
            target[temp] = new Function('return '+name.toString())();
        }else{
            target[temp] = name;
        }
    }
    return target;
}