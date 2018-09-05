// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }

/* var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans); */

var arr =[ 8,-2, 6, -1, -5, 4, -7, -2, 3];
// findMinSum(arr);
function findMinSum(array){
    if(array==null || array.length<1){
        return 0;
    }
    var sum = [];
    sum[0] = array[0];
    for(let i=1;i<array.length;i++){
        sum[i] = Math.min(sum[i-1]+array[i],array[i]);
    }
    var min = sum[0];
    for(let i=1;i<sum.length;i++){
        if(sum[i]<min){
            min = sum[i];
        }
    }
    // return min;
    console.log(min);
}

var str = '923041587';
console.log(find2018Count(str));
function find2018Count(str){
    if(str==null || str == ''){
        return 0;
    }
    str = str.replace(/[345679]/g,'');
    if(str=='') return 0;
    var arr = str.split('2018');
    if(arr.length>1){
        return arr.length-1;
    }else{
        return 0;
    }
}

