// 每个整数都希望可以整除很多数字，特别是它自身包含的数字，我们将整数分为三类：

// 1.    数字可以整除它包含的一部分数字，比如72，由，7和2两种数字组成，72可以整除2，我们称这个数字是开心的，用”H”表示。

// 2.    数字不能整除它包含的任何数字，比如73，由，7和3两种数字组成，73不能整除任何数，我们称这个数字是沮丧的，用”S”表示。

// 3.    数字可以整除它包含的所有数字，比如12，既可以整除1又可以整除2，我们称它是一个非常棒的数，用“G”表示。

// (0可以被任何数整除。)

// 样例输入
// 3   //3个数字
// 72
// 73
// 12
// 样例输出
// H
// S
// G
var arr = [72,73,12];
getNumType(arr,3);
function getNumType(arr,n){
    if(arr == null || arr.length<=0) return;
    var result = [];
    for(var i=0;i<n;i++){
        result.push(isNumber(arr[i]));
    }
    return result;
}
console.log(isNumber(0));
function isNumber(num){
    var len = num.toString().length;
    var temp  = num.toString().split('');
    var count = 0;
    for(var i =0;i<len;i++){
        if(temp[i]>0 && (num/temp[i])==Math.floor(num/temp[i])){
            count++;
        }else if(temp[i]==0){
            count++;
        }
    }
    if(count == len){
        return 'G';
    }
    if(count == 0){
        return 'S';
    }
    return 'H';
}