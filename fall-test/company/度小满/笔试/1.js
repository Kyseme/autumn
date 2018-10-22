//ONU是一种新型桌游，一副牌有若干种花色，总共N张，且每种花色的牌的张数一样。
//现在每次给定N，M，表示这副总共N张的牌至少有M种花色，请问这副牌可能的花色有多少种？

// 输入
// 共一行，两个整数N，M。（1≤N≤10^12，0≤M≤10^12）

// 输出
// 一个整数，表示可能的花色种数。


// 样例输入
// 30 14
// 样例输出
// 2

// Hint
// 可能有15或者30种花色，所以总共两种花色数。
//n张牌  至少m种花色
getNum(30,14);
function getNum(n, m) {
    var count = 0;
    if (m == 0) m = 1;
    while (m <= n/2) {
        if (n / m == Math.floor(n / m)) {
            count++;
        }
        m = m + 1;
    }
    console.log(++count);
    return count;
}
function getNum2(n,m){
    if (m == 0) m = 1;
    while (m <= n/2) {
        if (n / m == Math.floor(n / m)) {
           return m;
        }
    }
    return 0;
}
// getCount(1,30);
function getCount(m,n){
    if(m>=n/2) return 2;
    var num1 = n/m;
    var count = 2;
    var i = 2;
    while(m<n/2||num1<n/2){
        m = m*i;
        num1 = num1*i;
        if(n/m==Math.floor(n/m)){
            count++;
        }
        if(n/num1 == Math.floor(n/num1)){
            count++;
        }
        i++;
    }
    console.log(count);
}
