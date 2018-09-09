
var n = 3;
var m = 9;
var arr = [1,1,2,2,2,3,1,2,3];
// getScore(n,m,arr);
function getScore(n,m,arr){
    if(n<=0||m<=0) return 0;
    if(arr==null || arr.length<=0) return 0;
    let obj = {};
    for(let i of arr){
        if(obj[i]) ++obj[i];
        else obj[i] = 1;
    }
    if(Object.keys(obj).length < n) return 0;
    let min = m;
    for(let key in obj){
        if(obj[key]<min) min = obj[key];
    }
    return min;
}
console.log(getMaxCount('bwbwbbbbb'));
function getMaxCount(str){
    if(str == null || str.lenght <=0) return 0;
    let bs = '';
    let ws = '';
    for(let i=0;i<str.length;i++){
        if(str[i]=='b'){
            bs+=str[i];
        }else if(str[i]=='w'){
            ws+=str[i];
        }
    }
    let result = 0;
    if(bs.length == 0 || ws.length == 0) return 0;
    if(bs.length == ws.length){
        result = bs.length + ws.length;
    }else{
        result = bs.length > ws.length ? ws.length:bs.length;
        result = 2*result + 1;
    }
    return result;
}