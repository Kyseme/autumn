// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.on('line', (input) => {
//     console.log(`接收到：${input}`);
// });
// rl.on('SIGINT', () => {
//     rl.question('确定要退出吗？ ', (answer) => {
//       if (answer.match(/^y(es)?$/i)) rl.pause();
//     });
// });

var s1 = '3 3';
var s2 = '0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1';
var s1s = s1.split(' ');
var s2s = s2.split(';');
if(!isValid(s1s,s2s)){
    return;
}
var n = parseInt(s1s[0])*2+1;
var m = parseInt(s1s[1])*2+1;
var k = parseInt(s1s[0]);
var h = parseInt(s1s[1]);
var arr = initArr(n,m,k,h);

for(let item of s2s){
    let temp = item.split(' ');
    let start = temp[0].split(',');
    let end = temp[1].split(',');
    //start的下标
    let x = parseInt(start[0])*2+1;
    let y = parseInt(start[1])*2+1;
    let x1 = parseInt(end[0])*2+1;
    let y1 = parseInt(end[1])*2+1;
    if(x==x1){
        y>y1 ? arr[x1][y1+1] = '[R]':arr[x][y+1] = '[R]'; 
    }else{
        x>x1 ? arr[x1+1][y1] = '[R]':arr[x+1][y] = '[R]';  
    }
}
printArr(arr);

function initArr(n,m,k,h){
    let arr = [];
    for(let i=0;i<n;i++){
        arr[i]=[];
        for(let j=0;j<m;j++){
            arr[i][j]='[W]';
        }
    }
    for(let i=0;i<k;i++){
        for(let j=0;j<h;j++){
            arr[i*2+1][j*2+1] = '[R]';
        }
    }
    return arr;
}
function printArr(arr){
    for(let temp of arr){
        console.log(temp.join(' '));
    }
}

function isValid(s1,s2){
   for(let ss1 of s1){
       if(!checkNum(ss1)) return;
   }
   let n = parseInt(s1[0]);
   let m = parseInt(s1[1]);
   for(let item of s2){
    let temp = item.split(' ');
    let start = temp[0].split(',');
    let end = temp[1].split(',');
    if((!checkNum(start[0]))||(!checkNum(start[1]))||(!checkNum(end[0]))||(!checkNum(end[1]))){
      return false;
    }
    let x = parseInt(start[0]);
    let y = parseInt(start[1]);
    let x1 = parseInt(end[0]);
    let y1 = parseInt(end[1]);
    if(!checkRange(x,y,x1,y1,n,m)){
        return false;
    }
    if(!checkMaze(x,y,x1,y1)){
        return false;
    }
   }
   return true;
}

//检查是否为数字
// function checkNum(num){
//     if(isNaN(num)){
//         console.log('Invalid number format');
//         return false;
//     }
//     return true;
// }
function checkNum(num) {
    let reg = /^[0-9]*$/;
    console.log(num)
    if (!reg.test(num)) {
        console.log('Invalid number format');
        return false;
    }
    return true;
}

//检查数字输出范围
function checkRange(x,y,x1,y1,m,n){
    let xx = x>=0 && x<=m && x1>=0 && x1<=m;
    let yy = y>=0 && y<=n && y1>=0 && y1<=n;
    if(xx && yy){
        return true;
    }
    console.log('Number out of range ');
    return false;
}

//检查输出格式
function checkFormat(str){
    if((typeof str)!=='string'){
        console.log('Incorrect command format');
        return false;
    }
    return true;
}

// 检查连通性错误
function checkMaze(x,y,x1,y1){
    if(x-x1!==0 && y-y1!==0){
        console.log('Maze format error.');
        return false;
    }
    if(x-x1===0){
        if(Math.abs(y-y1)===1) return true;
    }
    if(y-y1===0){
        if(Math.abs(x-x1)===1) return true;
    }
    console.log('Maze format error.');
    return false;
}