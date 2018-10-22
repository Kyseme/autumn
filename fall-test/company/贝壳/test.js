
// function getMinFee(arr) {
//     arr = arr.sort(arr);
//     let min = 0;
//     for (let i = 1; i < n; i++) {
//         min += arr[i];
//     }
//     return min;
// }

// var arr = [[1,5],[2,6],[3,7]];
var arr = [[3,10],[20,30],[1,3],[1,39]];
var n = 3;
mergeGroup(arr);
function mergeGroup(arr){
    if(arr==null || arr.length<=0){
        return 0;
    }
    var copy = arr.slice(0);
    copy = copy.sort(function(a,b){
        return a[0]-b[0];
    })
    let results = [copy[0][0],copy[0][1]];
    let remain = [];
    for(let i=1;i<copy.length;i++){
        if(copy[i][0]>=results[1]){
            results[1] = copy[i][1];
        }else{
            if(results[1]>copy[i][1]){
                results[1] = copy[i][1];
                remain.push(copy[i-1]);
            }else{
                remain.push(copy[i]);
            }
        }
    }
    console.log(remain);
}






// console.log(deletGroup(n,arr));
// function deletGroup(n,arr){
//     if(arr==null || arr.length<=0){
//         return 0;
//     }
//     var count = 0;
//     var copy = arr.slice(0);
//     var obj = getMaxRang(copy);
//     var max = obj.index;
//     var flag = findCopy(copy);
//     var results = [];
//     while(flag){
//         if(copy.length<=0)break;
//         copy.splice(max,1);
//         if(obj.num.length>0)results.push(arr.indexOf(obj.num)+1);
//         flag = findCopy(copy);
//         while(!flag){
//             if(copy.length<=0)break;
//             copy.splice(max,1);
//             flag = findCopy(copy);
//         }
//         if(copy.length<=0)break;
//         count++;
//         obj = getMaxRang(copy);
//         max = obj.index;
//     }
//     console.log(count);
//     console.log(results.join(','))
// }

// function getMaxRang(arr){
//    var index = 0;
//    var range = arr[0];
//    console.log(arr)
//    var max = arr[0][1] - arr[0][0];
//    for(let i = 1;i<arr.length;i++){
//        if(arr[i][1]-arr[i][0]>max){
//            max = arr[i][1] - arr[i][0];
//            range = arr[i];
//            index = i;
//        }
//    }
//    return {index:index,num:range};
// }

// function findCopy(arr){
//     console.log(arr);
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i][1]>arr[i+1][0]){
//             return true;
//         }
//     }
//     return false;
// }

