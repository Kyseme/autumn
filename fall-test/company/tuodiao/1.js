
var m =10,n=10;
var arr =[[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,1,0,0,0],
    [0,1,0,0,0,0,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,1],
    [0,0,0,1,1,1,0,0,0,1],
    [0,0,0,0,0,0,1,0,1,1],
    [0,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0]];
console.log(getMaxInfo(m,n,arr));
function getMaxInfo(m,n,a){
    let res = [0,0];//res[0]代表群体个数 res[1]代表最大群体人数
    for (let i=0;i<m;i++){
        for (let j = 0; j < n; j++) {
            if(a[i][j]==1){
                let curMax = [0];
                clearOneToZero(m,n,a,res,i,j,curMax);
                res[0]++;
                res[1] = Math.max(curMax[0],res[1]);
            }
        }
    }
    return res.join(',');
}

function clearOneToZero(m,n,a,res,i,j,curMax){
    a[i][j] = 0;
    curMax[0]++;
    var dirx = [-1,1,0,0,-1,-1,1,1];
    var diry = [0,0,-1,1,-1,1,-1,1];
    for(let z=0;z<dirx.length;z++){
        let ti = i+dirx[z];
        let tj = j+diry[z];
        if(ti>=0&&ti<m&&tj>=0&&tj<n&&a[ti][tj]==1){
            clearOneToZero(m,n,a,res,ti,tj,curMax);
        }
    }
}