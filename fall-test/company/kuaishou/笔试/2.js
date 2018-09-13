var ans = [];
var lines = readline().split(",");
for(let i = 0;i<lines.length;i++){
    ans.push(parseInt(lines[i]));
}
var ans = [1,100,1,1,1,100,1,1,100,1];
console.log(minCost(ans));

function minCost(arr) {
    if(arr == null || arr.length <=0) return 0;
    var len = arr.length;
    var dp = [];
    dp.length = len +1;
    dp[len] = 0;
    for(let i=0;i<=len;i++){
        if(i<2){
            dp[i] = arr[i];
        }else{
            dp[i] = Math.min(dp[i-1],dp[i-2]);
        }
        if(i!=len&&i>=2){
            dp[i] +=arr[i];
        }
    }
    return dp[len];
}
