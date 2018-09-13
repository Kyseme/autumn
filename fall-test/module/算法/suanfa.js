
//求两个字符串的乘积    输入 12,24     输出384
//模拟两个数字相乘的

console.log(getMutiply('12','24'));
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

//最长对称字符子串 回文子串

