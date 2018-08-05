var arr = [6,1,2,7,9,3,4,5,10,8];
function quickSort(left,right,arr){
    let temp = arr[left];
    let i = left;
    let j = right;
    if(left>right){
        return;
    }
    while(i!==j){
        while(arr[j]>=temp && i<j){
            j--;
        }
        while(arr[i]<=temp && i<j){
            i++;
        }
        if(i<j){
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
    arr[left] = arr[i];
    arr[i] = temp;
    quickSort(left,i-1,arr);
    quickSort(i+1,right,arr);
}
// quickSort(0,9,arr);
console.log(arr);

function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid,arr.length);
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(left,right){
    let il =0;
    let ir =0;
    let result = [];
    let i =0;
    while(il<left.length && ir<right.length){
        if(left[il]<right[ir]){
            result[i++] = left[il++];
        }else{
            result[i++] = right[ir++];
        }  
    }
    while(il<left.length){
        result[i++] = left[il++];
    }
    while(ir<right.length){
        result[i++] = right[ir++];
    }
    return result;
}
// console.log(mergeSort(arr));