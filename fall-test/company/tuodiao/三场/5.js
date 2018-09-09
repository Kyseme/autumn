
var n = 3;var m =3;
var ans = [[1,2],[2,1],[2,3]];
// console.log(getMaxHotPerson(n,m,ans));
function getMaxHotPerson(n,m,arr){
    if(n<=0 || m<=0 || arr == null || arr.length <=0)  return 0;
    if(n == 1 ) return 1;
    arr = arr.sort(function(a,b){
        return a[1] -b[1];
    });
    var res = arr.slice(0);
    for(let i =0;i<res.length-1;i++){
        if(res[i][0]<res[i][1] && res[i+1][0]-res[i][1] == 0 && res[i+1][1] - res[i+1][0] == 1){
            res[i][1] = res[i+1][1];
            res.splice(i+1,1);
        }
    }
    res = res.sort(function(a,b){
        return b[1] - b[0] -a[1] + a[0];
    });
    let count = 1;
    for(let i = 0;i<res.length-1;i++){
        if((res[i][1]- res[i][0]) == (res[i+1][1] - res[i+1][0])){
            ++count;
        }
    }
    return count;
}

var flag = [];
flag.length = n+1;
flag.fill(false);
console.log(getCore(ans,flag,n));
function getCore(map,flag,n){
    var res = [1];
    for(let i=0;i<n;i++){
        flag[i] = true;
        let times = 1;
        dfs(map,i,flag,n,times,res);
        flag[i] = false;
    }
    return res[0];
}
function dfs(map,s,flag, n,times,res){
    if(times==n){
        res[0]++;
    }
    for(let i=0;i<n;i++){
        if(map[s][i]!=0&&!flag[i]) {
            flag[i] = true;
            times++;
            dfs(map,i,flag,n,times,res);
            times--;
            flag[i] = false;
        }
    }
}