
var n = 4;
var arr = [[1,0,0,0],[0,0,0,0],[0,0,0,1],[0,0,0,0]];
var n =5;
var arr = [[1,0,0,1,1],[1,0,0,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]];

console.log(getSum(n,arr));
function getSum(n,a) {
    var res = 0;
    for (let i=0;i < n;i++){
        for (let j = 0; j < n; j++) {
            if(a[i][j]==1){
                clearOneToZero(n,a,i,j);
                res++;
            }
        }
    }
    return res;
}
function clearOneToZero(n,a,i,j){
    a[i][j] = 0;
    let dirx = [-1,1,0,0];
    let diry = [0,0,-1,1];
    for(let z=0;z<dirx.length;z++){
        let ti = i+dirx[z];
        let tj = j+diry[z];
        if(ti>=0&&ti<n&&tj>=0&&tj<n&&a[ti][tj]==1){
            clearOneToZero(n,a,ti,tj);
        }
    }
}