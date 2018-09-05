/**
 * while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}

var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans);
 */

function validIp(str){
    if(str == null || str == ''){
        return false;
    }
    let arr = str.split('.');
    let len = arr.length;
    if(len<=0 || len>4) return false;
    for(let i=0;i<len;i++){
        if(/^0\d+/.test(arr[i])) return false;
        if(/[^0-9]/.test(arr[i])) return false;
        if(+arr[i] < 0 || +arr[i] >255 ) return false;
    }
    return true;
}

console.log(validIp('12s.056.67.89'));

//对数组质数项求和

function getNumSum(n){
    if(n<=0){
        return 0;
    }
    var result = [];
    var i = 1;
    var sum = 0;
    result.push(0);
    while(i<n){
        result.push(2*i-1);
        ++i;
    }
    for(let j= 0;j<result.length;j++){
        sum+=result[j];
    }
    console.log(sum);
}
// getNumSum(0);