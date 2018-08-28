// var t = readline().split(' ');
// var n = t[0];
// var m = t[1];
// var ans = readline().split(' ');
var n= 6;
var m = 1;
var ans = [1,1,1,1,1,1];
calcNum(n,m,ans);
function calcNum(n,m,arr){
    if(n<=0 || m<0 || m>=n){
        return;
    }
    if(arr==null ||arr.length<=0){
        return;
    }
    var total = 0;;
    arr.forEach(function(item){
        total +=item;
    });
    var num = (total/(n-m));
    console.log(num.toFixed(2));
}