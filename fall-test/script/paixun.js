
//冒泡排序
function bubbleSort(arr){
    let len = arr.length;
    for(let i =0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// var arr = [5,4,3,2,1];
// bubbleSort(arr);
// console.log(arr);


//归并排序
function mergeSortRec(arr){
    var len = arr.length;
    if(len === 1){
        return arr;
    }
    var mid = Math.floor(len/2);
    var left = arr.slice(0,mid);
    var right = arr.silce(mid,len);

    return merge(mergeSortRec(left),mergeSortRec(right));
}

function merge(left,right){
    let result = [];
    let il = 0;
    let ir = 0;
    while(il<left.length && ir < right.length){
        if(left[il]<right[ir]){
            result.push(left[il++]);
        }else{
            result.push(right[ir++]);
        }
    }
    while(il<left.length){
        result.push(left[il]++);
    }
    while(ir<right.length){
        result.push(right[ir++]);
    }
    return result;
}

//快速排序 “6 1 2 7 9 3 4 5 10 8”
//在序列中找一个数作为基准数,然后然后将这个序列中比基准数大的放基准数右边，比它小的放左边

//http://wiki.jikexueyuan.com/project/easy-learn-algorithm/fast-sort.html

/**
 * （1）在数据集之中，选择一个元素作为"基准"（pivot）。

　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

var arr = [6,1,2,7,9,3,4,5,10,8];
// quicksort(arr);

function quicksort2(left,right){
    var i,j,temp;
    if(left>right){
        return;
    }
    temp = arr[left];
    i = left;
    j = right;
    while(i!=j){
        while(arr[j]>=temp && i<j){
            j--;
        }
        while(arr[i]<=temp && i<j){
            i++;
        }
        if(i<j){
            let t = arr[j];
            arr[j] = arr[i];
            arr[i] = t;
        }
    }
    arr[left] = arr[i];
    arr[i] = temp;
    quicksort2(left,i-1);
    quicksort2(i+1,right);
}
// quicksort2(0,9);
// console.log(arr);


 function mergeSort2(arr){
    let k =1;
    let temp = [];
    temp.length = arr.length;
    console.log(temp,arr.length)
    while(k<arr.length){
        MergePass(arr,temp,k,arr.length);
        k=k*2;
        MergePass(temp,arr,k,arr.length);
        k=k*2;
    }
 }
 function MergePass(sr,temp,s,n){
    let i =0;
    let j;
    while(i<= n-2*s){
        Merge(sr,temp,i,i+s-1,i+2*s-1);//两两归并
        i = i+2*s;
    }
    if(i+s<n){
        Merge(sr,temp,i,i+s-1,n-1);
    }else{
        for(j=i;j<=n-1;j++){
            temp[j] = sr[j];
        }
    }
 }
 function Merge(sr,tr,l,m,r){
    let i =l;
    let j = m+1;
    let k =l;
    while(i<=m && j<=r){
        if(sr[i]<=sr[j]){
            tr[k++] = sr[i++];
        }else{
            tr[k++] = sr[j++];
        }
    }
    if(i>m){
        for(let q=j;q<=r;q++){
            tr[k++] = sr[q];
        }
    }else{
        for (let q = i; q <= m; q++) {
            tr[k++] = sr[q];
        }
    }
 }

 console.log(arr);
 mergeSort2(arr)
 console.log(arr);