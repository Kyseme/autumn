
console.log(getMaxStr('a1223a'));

function getMaxStr(str) {
    if(str==null||str.length<=0){
        return str;
    }
    var len = str.length;
    var dp = [];
    for(let i = 0;i<len;i++){
        dp[i] = [];
        for(let j=0;j<len;j++){
           dp[i][j] = 0; 
        }
    }
    var maxlen = 1;
    var start = 0;
    for(let i=0;i<len;i++){
        for(let j=0;j<=i;j++){
            if(i-j<2){
                dp[j][i] = (str[i]==str[j]);
            }else{
                dp[j][i] = ((str[i]==str[j])&&dp[j+1][i-1]); 
            }
            if(dp[j][i]&&maxlen<(i-j+1)){
                maxlen = i-j+1;
                start = j;
            }
        }
    }
    return str.substring(start,maxlen+start);
}