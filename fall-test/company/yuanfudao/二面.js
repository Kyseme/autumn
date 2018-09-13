//一道编程题，一个迷宫，能走通的标记为0，走不通的标记为1，现在给你定一个起点Q(i,j)如何使Q以最小路径走出来
function getPath(arr,x,y){
    var path = [];
    let len1 = arr.length;
    let len2 = arr[0].length;
    for(let i=0;i<len1;i++){
        path[i] = [];
        for(let j=0;j<len2;j++){
            if(arr[i][j] == 0){
                path[i][j] = false;
            }else{
                path[i][j] = true;
            }
        }
    }
    getCount(arr,x,y,len1,len2,path,0)
}

function getCount(arr,x,y,len1,len2,path,count){
    if(x==0 || y==0|| x==len1-1 || y==len-1) return count;
    let dx = [1,0,-1,0];
    let dy = [0,1,0,-1];
    if(arr[x][y]==0 && !path[x][y]){
        for(let i=0;i<4;i++){
            let ti = x + dx[i];
            let tj = y + dy[i];
            if(ti>=0 && ti<len1 && tj>=0 && tj<len2 && arr[ti][tj]==0){
                count ++;
                path[x][y] = true;
                x = ti;
                y = tj;
                getCount(arr,x,y,len1,len2,path,count);
            }
        }
    }
}