//数组扁平化
var arr = [1,[2,[3,[4]]]];
// console.log(flatten(arr));
function flatten(arr){
    return arr.reduce(function(pre,next){
        return pre.concat(Object.prototype.toString.call(next)=='[object Array]'?flatten(next):next);
    },[]);
}
// console.log(flatten(arr));
function flat(arr){
    var temp = [];
    for(let i=0;i<arr.length;i++){
        if(Object.prototype.toString.call(arr[i])=='[object Array]'){
            temp = temp.concat(flat(arr[i]));
        }else{
            temp.push(arr[i]);
        }
    }
   return temp;
}

var input = {
    
}