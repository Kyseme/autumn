/**
 * while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}

var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans);
 */
// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     var c = parseInt(lines[2]);
//     var result = findMax(a,b,c);
//     print(result);
// }

// var firstLine = readline().split(" ");
// var n = parseInt(firstLine[0]);
// var k = parseInt(firstLine[1]);
// var endLine = readline().split(" ");
// var ans = [];
// for(let i=0;i<n;i++){
//     ans.push(parseInt(endLine[i]));
// }
function findMax(n1,n2,n3){
    if(n1==null||n2==null||n3==null){
        return 0;
    }
    var max = n1+n2+n3;
    var temp = (n1+n2)*n3;
    max = temp>max?temp:max;
    temp = (n1+n3)*n2;
    max = temp>max?temp:max;
    temp = (n2+n3)*n1;
    max = temp>max?temp:max;
    temp = n1*n2*n3;
    max = temp>max?temp:max;
    return max;
}
// console.log(findMax(1,2,3));
var m = 3,n=1,arr=[5,8,5];
var reee = findMinOption(m,2,arr);
console.log(reee)
for(let i=0;i<reee.length;i++){
    console.log(reee[i].join(' '))
}

//移动塔的积木，使最高塔和最低塔相差最小
function findMinOption(m,n,arr){
    let count = 0;
    let maxIndex;
    let minIndex;
    let result = [];
    while(count<n){
        let temp = findMin(arr);
        minIndex = temp[0];
        maxIndex = temp[1];
        if(arr[maxIndex]>arr[minIndex]){
            arr[maxIndex] = arr[maxIndex] -1;
            arr[minIndex] = arr[minIndex] +1;
            ++count;
            result.push([maxIndex+1,minIndex+1]);            
        }
        if(arr[maxIndex]==arr[minIndex]){
            result.unshift([0,count]);
            return result;
        }
    }
    let rs = findMin(arr);
    console.log(rs)
    let dp = arr[rs[1]] - arr[rs[0]];
    result.unshift([dp,n]);
    return result;
    
}

function findMin(arr){
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;
    for(let i =1;i<arr.length;i++){
        if(min>arr[i]){
            min = arr[i];
            minIndex = i;
        }
        if(max<arr[i]){
            max = arr[i];
            maxIndex = i;
        }
    }
    return [minIndex,maxIndex];
}














function findStr(n,m,k){
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push('a');
    }
    for(let j=0;j<m;j++){
        arr.push('z');
    }
    arr = arr.sort();
    let count = 1;
    while (true) {
        if(count==k){
            return arr.join('');
        }
        count = count+1;
        j = arr.length - 1;
        index = 0;
        for (j = arr.length - 2; j >= 0; j--) {
            if (arr[j] < arr[j + 1]) {
                index = j;
                break;
            }
            else if (j == 0) {
                return -1;
            }
        }

        for (j = arr.length - 1; j >= 0; j--) {
            if (arr[j] > arr[index])
                break;
        }
        swap(arr, index, j);
        reverse(arr, index + 1);
    }
}

function reverse(arr, i) {
    var k = i, j = arr.length - 1;
    while (k < j) {
        swap(arr, k, j);
        k++;
        j--;
    }
}

function swap(arr,i, j) {
    let temp;
    temp = arr[i];
    arr[i]= arr[j];
    arr[j] = temp;
}