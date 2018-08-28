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

function findCount(str){
    if(Number(str)<3){
        return 0;
    }
    let count =0;
    let value = 0;
    for(let i=0;i<str.length;i++){
        value = value + str[i];
        if(value%3==0){
            count++;
            value = '';
        }
    }
    return count;
}
// console.log(findCount('321'));

var str = 'this is a chick';
var src = 'is';
var target = 'are';
var tt = str.replace(new RegExp(src,'g'),target);

// console.log(tt);


function upArr(array){
    if(array==null || array.length<=0){
        return;
    }
    var sum = [];
    sum[0] = array[0];
    for(let i=1;i<array.length;i++){
        if(array[i-1]<array[i]){
            sum[i] = sum[i-1]+array[i];
        }else{
            sum[i] = array[i];
        }
    }
    var max = sum[0];
    for(let i=1;i<sum.length;i++){
        if(sum[i]>max){
            max = sum[i];
        }
    }
    return max;
}
var a5 = [5,1,3,4,9,7,6,8];
console.log(upArr(a5))