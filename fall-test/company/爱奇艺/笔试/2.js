//局长的食物
var n = 3;
var m = 4;
var p = 2;
var ans = [5,3,1];
var bs = [1];
var as = [2,2,3];
console.log(getFood(n,m,p,ans,bs,as));
function getFood(n,m,p,ans,bs,as){
    if(n<=0 || m<=0 || ans == null) return;
    for(let i=0;i<bs.length;i++){
        --ans[bs[i]-1];
    }
    for(let i=0;i<as.length;i++){
        ++ans[as[i]-1];
    }
    var t = ans[p-1];
    var res = 1;
    for(let i=0;i<ans.length;i++){
        if(ans[i]>t){
            res++;
        }
    }
    return res;
}