// #include <iostream> #include <string> #include <math.h> 
// using namespace std; 
// function main(){ 
//     let s;
//     let len=s.length; 
//     let index=0; 
//     for(let i=0;i<len;i++,index++){ 
//         let n=s[i]-'a'; 
//         for(let j=0;j<4-i;j++){
//         index+=n*pow(25,j);
//     }
// } 
//     console.log(index-1);
//     return 0;
// }

// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }

// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);

/**和谐的数字
 * 
 *题目描述
 * 牛牛很喜欢研究数学。一天，他发明了一种数字，叫做‘和谐的数字’
 * 和谐的数字定义如下：
 * 定义S(n)为数字n各位数字之和，如果S(n)能够整除n，那么就称n为一个‘和谐的数字’
 * 现在给出数字n，请你判断这是否是一个‘和谐的数字’
 * 
 * 输入描述
 * 输入的第一行包含一个正整数t(1<=t<=20),表示情况数
 * 接下来t行，每行一个正整数n(1<=n<=10**9)
 * 
 * 输出描述
 * 对于每个正整数n,如果n是和谐的数字,输出‘Yes’，否则输出‘No’
 * 
 * 示例
 * 输入
 * 7
 * 34
 * 66
 * 72
 * 6
 * 32
 * 33
 * 86
 * 
 * 输出
 * No
 * No
 * Yes
 * Yes
 * No
 * No
 * No
 */
var n = parseInt(readline());
var ans = [];
var temp;
for(var i = 0;i < n; i++){
    temp = getNum(parseInt(readline()));
    ans.push(temp); 
}
for(let i = 0;i<n;i++){
    console.log(ans[i]);
}

function getNum(num){
    let sn = 0;
    let num1 = num;
    while(num1>0){
        sn += num1 % 10;
        num1 = Math.floor(num1/10);
    }
    if((num/sn).toString().indexOf('.')===-1){
        return "Yes";
    }else{
        return 'No';
    }
} 