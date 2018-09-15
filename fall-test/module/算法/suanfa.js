
//求两个字符串的乘积    输入 12,24     输出384
//模拟两个数字相乘的

// console.log(getMutiply('12','24'));
function getMutiply(num1,num2){
    if (num1 == null || num1.length <= 0 || num2 == null || num2.length <= 0) {
        return '0';
    }
    if(num1.length < num2.length){
        let t = num1;
        num1 = num2;
        num2 = t;
    }
    let len1 = num1.length;
    let len2 = num2.length;
    let result = [];
    result.length = len1+len2;
    let len = result.length;
    result.fill(0);
   
    
    //得到不进位数的各个位数的数字
    for(let i = len1-1;i>=0;i--){
        for(let j = len2-1;j>=0;j--){
            result[i+j+1]+=(+num1[i])*(+num2[j]);
        }
    }
    let temp = 0;
    //开始进位，保证各个位数的数字是[0-9]
    for(let i = len-1;i>=0;i--){
        result[i] = result[i] + temp;
        temp = Math.floor(result[i]/10);
        result[i] = result[i]%10;
    }
    // console.log(result);
    //每个位数填满了，将数组中前面的0全部去掉
    result = result.join('').replace(/^0+/g,'');
    if(result == '') return '0';
    return result;
}

//输出对称字符串
var str1 = 'abbaaad';
getMaxStr(str1);
function getMaxStr(str){
    if(str == null || str.length <=0) return str;
    let len = str.length;
    let dp = [];
    for(let i =0;i<len;i++){
        dp[i] = [];
        for(let j = 0;j<len;j++){
            dp[i][j] = false;
        }
    }
    let maxLen = 1;
    let start = 0;
    for(let i = 0;i<len;i++){
        dp[i][i] = true;
        if(i<len-1 && str[i]==str[i+1]){
            dp[i][i+1] = true;
            start = i;
            maxLen = 2;
        }
    }
    for(let j = 3;j <= len;j++){
        for(let i=0;i<=len-j;i++){
            let k = i+j-1;
            if(dp[i+1][k-1] && str[i]==str[k]){
                dp[i][k] = true;
                start = i;
                maxLen = j;
            }
        }
    }
    console.log(start,maxLen);
    
    if(maxLen>=2){
       let result =  str.substring(start,start+maxLen);
       console.log(result);
    }
   
}


//一个人可以走1步也可以走2步，arr[i]为每次走的代价，求到顶端代价最小
var ans = [1,100,1,1,1,100,1,1,100,1];
// minCost(ans);
function minCost(arr){
    if(arr == null || arr.length <=0) return 0;
    var len = arr.length;
    var dp = [];
    dp.length = len + 1;
    dp[len] = 0;
    for(let i=0;i<=len;i++){
        if(i<2){
            dp[i] = arr[i];
        }else{
            dp[i] = Math.min(dp[i-1],dp[i-2]);
        }
        if(i!=len && i>=2){
            dp[i]+=arr[i];
        }
    }
    console.log(dp[len]);
}

//最大不重复子串
var str = 'aebcabd';
// getStrLength2(str);
function getStrLength(str){
    var set = new Set();
    let res = 0;
    let tail = 0;
    for(let head=0;head<str.length;head++){
        while(tail<=head && set.has(str[head])){
            set.delete(str[tail]);
            tail++;
        }
        set.add(str[head]);
        res = Math.max(res,head-tail+1);
    }
    console.log(set);
    console.log(res);
    return res;
}

function getStrLength2(str){
    var arr = [];
    let res = 0;
    let tail = 0;
    for(let head=0;head<str.length;head++){
        while(tail<=head && arr.includes(str[head])){
            arr = arr.slice(tail);
            tail++;
        }
        arr.push(str[head]);
        res = Math.max(res,head-tail+1);
    }
    console.log(arr);
    console.log(res);
    return res;
}
