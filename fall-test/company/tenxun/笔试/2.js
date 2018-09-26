// var n = parseInt(readline());
// var lines = readline().split(" ");
// var ans = [];
// for(var i = 0;i < n; i++){
//     ans += parseInt(lines[i]);
// }

/**巧克力
 * 
 */
var n = 3;
var arr = [1,0,1,1];
// arr = [0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0];
// n = 14;
getCount(n,arr);
function getCount(n,arr){
    if(arr == null || arr.length <=0) return;
    let len = arr.length;
    if(arr.indexOf(0)===-1) return len;
    if(arr.indexOf(1)===-1) return 0;
    // let index = arr.indexOf(1);
    // let temp  = arr[0]===0?arr.slice(index):arr.slice(0);
    temp = arr.slice(0);
    for(let i = 0;i<temp.length -1;i++){
        if(temp[i] === 1 && temp[i+1] === 1){
            temp.splice(i+1,1);
            i--;
        }
    }
    temp = temp.join('').split('1');
    let result = 1;
    for(let i = 1;i<temp.length-1;i++){
        let t = temp[i].length+1;
        result = result * t;
    }
    console.log(result);
}

