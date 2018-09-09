// function minSteps(n){
//     if(n<5) return 1;
//     let result = 0;
//     result = Math.floor(n/5);
//     if(n%5) result = result +1;
//     return result;
// }

// console.log(getMaxCount('bwbwbbbbb'));
console.log(getMaxCount('wwb'));
function getMaxCount(str){
    if(str == null || str.lenght <=0) return 0;
    str = str.replace(/[^b|w]/g,'');
    let bs = str.replace(/w/g,'');
    let ws = str.replace(/b/g,'');
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
// var res = findRoom(6,[[1,0],[1,1],[2,0],[2,1],[2,2],[6,4]]);
// for(let i = 0;i<6;i++){
//     console.log(res[i].join(' '));
// }
function findRoom(arr){
    if(arr == null || arr.length <=0) return [0,0];
    var result = [];
    var t = [];
    arr.forEach(function(item){
        t = [];
        let n = item[0];
        let k = item[1];
        if(n<=k || k<=1 || n<=2){
            t = [0,0];
        }else{
            t[0] = 0;
            t[1] = Math.min(n-k,k-1);
        }
        result.push(t);
    });
    return result;
}