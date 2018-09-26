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
getSum(20);
function getSum(n){
    if(n<=0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;
    let result = '1';
    let i = 2;
    while(i<=n){
        result = getMutiply(result,i+'');
        i++;
    }
    console.log(result);
}

function getMutiply(num1,num2){
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
    for(let i = len1-1;i>=0;i--){
        for(let j = len2-1;j>=0;j--){
            result[i+j+1]+=(+num1[i])*(+num2[j]);
        }
    }
    let temp = 0;
    for(let i = len-1;i>=0;i--){
        result[i] = result[i] + temp;
        temp = Math.floor(result[i]/10);
        result[i] = result[i]%10;
    }
    result = result.join('').replace(/^0+/g,'');
    return result;
}