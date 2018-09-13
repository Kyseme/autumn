
var arr = [3,2,9,10,4,5];
var n = 6;
arr = [3,2,9,10,11];
n = 5;
console.log(getMidNum(arr,n));
function getMidNum(arr,n){
    if(arr == null || arr.length <=0) return 0;
    arr = arr.sort(function(a,b){
        return a-b;
    });
    let mid;
    if(n%2){
        mid = arr[(n-1)/2];
    }else{
        mid = ((arr[n/2] + arr[n/2-1])/2).toFixed(2);
    }
    return mid;
}