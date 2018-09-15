### 1.求两个字符串的乘积

```javascript
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
```

### 2.最长对称子字符串
给定一个字符串(数字或大小写字母)，找出最长的对称的子串(如有多个，输出任意一个) <br/>

输入：'abbaad'
输出: 'abba'
https://www.cnblogs.com/AndyJee/p/4865013.html





### 3.最小代价爬楼梯
你需要爬上一个N层的楼梯，在爬楼梯过程中，每阶楼梯需花费非负代价，第i阶楼梯花费代价表示为cost[i],一旦你付出了代价，你可以在该基础上往上爬一阶或者两阶。你可以从第0阶或者第1阶开始，请找到达到顶端的最小代价是多少？

```javascript
    var ans = [1,100,1,1,1,100,1,1,100,1];
    
    function minCost(arr){
        if(arr == null || arr.length <=0) return 0;
        let len = arr.length;
        let dp = [];
        dp.length = len + 1;
        dp[len] = 0;
        for(let i= 0;i<=len;i++){
            if(i<2) dp[i] = arr[i];
            else dp[i] = Math.min(dp[i-1],dp[i-2]);
            if(i!=len && i>=2){
                dp[i] = dp[i] + arr[i];
            }
        }
        return dp[len];
    }

```

### 4.最大不重复子串
给定一个字符串，请找出其中无重复字符的最长子字符串的长度
如，'aebcabd'其最长子字符串'aebc'长度为4

思路：
- 遍历字符串，使用head来标记当前子串的右侧头位置，tail来标记当前子串的左侧尾位置，sub[tai,head]表示当前子串
- 当sub[tail,head]中所有字符都不重复时,则head++
- 当sub[tail,head]中包含重复字符时，则tail++,直到所有字符都不重复为止
- 根据当前不重复子串，更新最长长度res

```javascript
    function getStrLength(str){
        var arr = [];
        var res = 0;
        var tail = 0;
        for(let head = 0;head<str.length;head++){
            while(tail<=head && arr.indexOf(str[head])!=-1){
                arr = arr.slice(tail);
                tail++;
            }
            arr.push(str[head]);
            res = Math.max(res,tail-head+1);
        }
        return res;
    }
```


　















