
var str = 'abcabcbb'
console.log(lengthOfLongestSubstring(str))

function lengthOfLongestSubstring(s) {
    let len = 0 ;

   if (s==null || s.length== 0 )
   {
       return 0;
   }
   if (s.length == 1){
       return 1;
   }

  
   let i, j;
   let last_start = 0;     // 上一次最长子串的起始位置
   maxlen = maxindex = 0;
   let len = str.length;
   dp[0] = 1;
   for(i = 1; i < len; ++i)
   {
       for(j = i-1; j >= last_start; --j) // 遍历到上一次最长子串起始位置
       {
           if(str[j] == str[i])
           {
               dp[i] = i - j;
               last_start = j+1; // 更新last_start
               break;
           }else if(j == last_start) // 无重复
           {
               dp[i] = dp[i-1] + 1;
           }
       }
       if(dp[i] > maxlen)
       {
           maxlen = dp[i];
           maxindex = i + 1 - maxlen;
       }
   }
   return str;
}
