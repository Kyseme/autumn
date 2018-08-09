var arr = [6,1,2,7,9,3,4,5,10,8];
// quickSort(arr,0,9);
// console.log(arr);
function quickSort(arr,left,right){
    if(left>right) return;
    let i =left;
    let j = right;
    let temp = arr[left];
    while(i!=j){
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
    arr[left] = arr[j];
    arr[j] = temp;
    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
}

function mergeSort(arr){
    if(arr.length==1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return mergeHandle(mergeSort(left),mergeSort(right));
}

function mergeHandle(left,right){
    let il =0;
    let ir = 0;
    let res = [];
    let i =0;
    while(il<left.length && ir<right.length){
        if(left[il]<right[ir]){
            res[i++] = left[il++];
        }else{
            res[i++] = right[ir++];
        }
    }
    while(il<left.length){
        res[i++] = left[il++];
    }
    while(ir<right.length){
        res[i++] = right[ir++];
    }
    return res;
}

console.log(mergeSort(arr))