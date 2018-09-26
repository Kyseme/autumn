// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }



var ans = readline().split(" ").map(function(item){
    return parseInt(item);
});



// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);
var arr = [5,2,6,4];
getPrice(arr);
function getPrice(arr){
    if(arr == null || arr.length <=0) return '0 0 0';
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;
    let gap = 0;
    for(let i =0;i<arr.length-1;i++){
        let a = getMin(arr,i);
        min = a[0];
        minIndex = a[1];
        let t = getMax(arr,i);
        if(gap < (t[0]-min)){
            gap = t[0] - min;
            max = t[0];
            maxIndex = t[1];
        }
    }
    console.log(`${gap} ${minIndex+1} ${maxIndex+1}`)
}
function getMax(arr,i){
    let max = arr[i+1];
    let idx = i+1;
    let j;
    for(j = i+1;j<arr.length;j++){
        if(arr[j]>max){
            max = arr[j];
            idx = j;
        }
    }
    return [max,idx];
}

function getMin(arr,i){
    let min = arr[0];
    let idx = 0;
    let j;
    for(j=0;j<=i;j++){
        if(arr[j]<min){
            min = arr[j];
            idx = j;
        }
    }
    return [min,idx];
}