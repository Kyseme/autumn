/**
 * 魔法权杖强化
时间限制：C/C++语言 1000MS；其他语言 3000MS
内存限制：C/C++语言 65536KB；其他语言 589824KB
题目描述：
有一把魔法权杖，权杖上有n颗并排的法术石（编号为1到n）。每颗法术石具有一个能量值，
权杖的法术强度等同于法术石的最小能量值。权杖可以强化，一次强化可以将两颗相邻的法术石融合为一颗，
融合后的能量值为这两颗法术石能量值之和。现在有m次强化的机会，请问权杖能强化到的最大法术强度是多少？


输入
第一行包含两个正整数n，m，表示n颗法术石，m次强化机会。

第二行为n个用空格隔开的正整数v1, v2, … ,vn，vi表示编号为i的法术石具有的能量值。

数据范围：1≤m<n≤100000，1≤vi≤100000

输出
输出1个整数，表示权杖的最大的法术强度。


样例输入
6 3
1 7 2 2 5 9
样例输出
8

Hint
样例说明：合并1、7得到 { 8 2 2 5 9 }，合并2、2得到 { 8 4 5 9 }，合并4、5得到 { 8 9 9 }，法术强度等于8。
 */

var n = 6;
var m = 3;
var ans = [];
var str = '1 7 2 2 5 9'.split(' ');
for(var i =0;i<n;i++){
    ans.push(parseInt(str[i]));
}
var res = getNum(n,m,ans);
console.log(res);
function getNum(n,m,arr){
    if(m>n) return;
    for(var i = 0;i<m;i++){
        getMin(arr);
    }
    var min = arr[0];
    for(var j=1;j<arr.length;j++){
        if(arr[j]<min){
            min = arr[i];
        }
    }
   return min;
}
function getMin(arr){
    var min = arr[0];
    var index = 0;
    for(var i = 1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
            index =i;
        }
    }
    if(arr[index-1] && arr[index+1]){
        if(arr[index-1]>arr[index+1]){
            arr[index] = arr[index]+arr[index+1];
            arr.splice(index+1,1);
        }else{
            arr[index] = arr[index]+arr[index-1];
            arr.splice(index-1,1);
        }
    }
    if(index == 0){
        arr[index] = arr[index]+arr[index+1];
        arr.splice(index+1,1);
    }
    if(index == arr.length){
        arr[index] = arr[index]+arr[index-1];
        arr.splice(index-1,1);
    }
}
