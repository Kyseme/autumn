
// https://cloud.tencent.com/info/fb7f99b6f558132332daefc07637d3bf.html

function jumpFloor(n,m)
{
    if (m > n || n < 2) {
        return;
    }
    if (m == n) {
        return Math.pow(2, n - 1);
    } else if (m > 1) {
        return fiber(n,m);
    }
    return n;
}

function fiber(n,m){
    var steps = [];
    steps.length = n;
    for(let i=1;i<=n-1;i++){
        if(i<=m){
            steps[i] = Math.pow(2,i-1);
        }else{
            for(let j= i-1;j>=i-m;j--){
                steps[i] = steps[i]+steps[j];
            }
        }
    }
    let sum = 0;
    for(let i= n-m;i<=n-1;i++){
        sum+=steps[i];
    }
    return sum;
}

console.log(jumpFloorII(4,3));
