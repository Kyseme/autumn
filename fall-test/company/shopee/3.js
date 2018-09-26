//字符串编辑距离   两个字符串每次增/删/改一个字符，最少操作次数
//最小编辑代价
var str1 = 'abcde';
var str2 = 'aece';
console.log(getDistance(str1,str2));
function getDistance(str1,str2){
    if (str1 == null ||str2 == null || str1.length == 0 ||str2.length == 0){
        return 0;
    }
    var dp = [];
    for(let i =0;i<=str1.length;i++){
        dp[i] = [];
        for(let j=0;j<=str2.length;j++){
            dp[i][j] = 0;
        }
    }
    for (let i = 1; i <= str2.length; i++) {
        dp[0][i] = dp[0][i-1] + 1;
    }
    for (let i = 1; i <= str1.length ; i++) {
        dp[i][0] = dp[i-1][0] + 1;
    }

    for(let i = 1;i<=str1.length;i++){
        for(let j = 1;j<=str2.length;j++){
            if(str1[i-1] == str2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = dp[i-1][j-1]+1;
            }
            dp[i][j] = Math.min(dp[i][j],Math.min(dp[i][j-1]+1,dp[i-1][j]+1));
        }
    }
    return dp[str1.length][str2.length];
}

