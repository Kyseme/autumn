
var a = [1,2,3,-2,3,-10,3];
var n = 7;
var m = 2;
console.log(getMaxSum(a,m,n));
function  getMaxSum(a,m,n ) {
    var b = [];
    b.length = n+1;
    var arr = [];
    arr.length = n+1;
    b[0] = 0;
    arr[1] = a[0];
    for(let j=1;j<=m;j++){
        b[j] = b[j-1] + a[j-1];
        arr[j-1] = -1;
        let cur = b[j];
        for (let i = j+1;i<=n-m+j;i++){
            b[i] = b[i-1] + a[i-1];
            if(arr[i-1]+a[i-1] > b[i]){
                b[i] = arr[i-1] + a[i-1];
            }
            arr[i-1] = cur;
            if(b[i]>cur){
                cur = b[i];
            }
        }
        arr[j+n-m] = cur;
    }
    return arr[n];
}
