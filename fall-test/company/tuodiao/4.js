


function rmq1(i,j){
    let k = lg[j - i + 1];
    console.log(k);
    console.log(st1)
    return Math.max(st1[i][k], st1[j - p[k] + 1][k]);
}

function rmq2(i,j){
    let k = lg[j - i + 1];
    return Math.min(st2[i][k], st2[j - p[k] + 1][k]);
}

let a = [3,2,1];
let b = [3,3,3];
let n = 3;
var lg = [];
for(let j=0;j<n;j++){
    lg.push(j);
}
console.log(lg)
var st1 = [];
for(let i=0;i<n;i++){
    st1[i] = [];
    for(let j= 0;j<21;j++){
        st1[i].push(0);
    }
}
var st2 = st1.slice(0);
console.log(st2);
var p = [];
for(let j=0;j<n;j++){
    p.push(j);
}
console.log(n,a,b)
getRangeCount(n,a,b);
function getRangeCount(n,a,b){
    let tmp = 2;p[0] = 1;
    for (let i = 1; i <= 20; i ++) p[i] = p[i - 1] * 2;
    for (let i = 2; i <= n; i ++) {
        lg[i] = lg[i - 1];
        if (tmp <= i) lg[i] ++, tmp *= 2;
    }
    for (let i= 0; i < n; i ++) {
        st1[i][0] = a[i], 
        st2[i][0] = b[i];
    }
    for (let i =1; i <= 20 && p[i] <=n; i ++)
        for (let j = 1; j <= n && j + p[i] - 1 <n; j ++){
            st1[j][i] = Math.max(st1[j][i - 1], st1[j + p[i - 1]][i - 1]);
            st2[j][i] = Math.max(st2[j][i - 1], st2[j + p[i - 1]][i - 1]);
        }

    let ans = 0;
    for (let i=0; i < n; i ++){
        if (a[i] > b[i]) continue;
        let l = i, r = n;
        while(l != r){

            let mid = (l + r) >> 1;
            if (rmq1(i, mid) >= rmq2(i, mid)) r = mid;
            else l = mid + 1;
        }
        if (rmq1(i, r) != rmq2(i, l)) continue;
        let p = l;
        l = i, r = n + 1;
        while(l != r){
            let mid = (l + r) >> 1;
            if (rmq1(i, mid) > rmq2(i, mid)) r = mid;
            else l = mid + 1;
        }
        ans += l - p;
    }
    // printf("%I64d\n", ans);
    console.log(ans);
    return 0;
}