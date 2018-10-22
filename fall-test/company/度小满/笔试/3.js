var n = parseInt('4');
var ans = [72,73,12,3];

var res = getNumType(ans,n);
for(var j=0;j<n;j++){
    console.log(res[j]);
}
function getNumType(arr,n){
    var result = [];
    for(var i=0;i<n;i++){
        result.push(isNumber(arr[i]));
    }
    return result;
}
function isNumber(num){
    var num1 = num;
    var count = 0;
    var temp;
    var len = num.toString().length;
    while(len>0){
         temp = num1%10;
        if(temp>0 && (num/temp).toString().indexOf('.')==-1){
            ++count;
        }
        len--;
        num1 = Math.floor(num1/10);
    }
    if(count == num.toString().length){
        return 'G';
    }
    if(count == 0){
        return 'S';
    }
    return 'H';
}