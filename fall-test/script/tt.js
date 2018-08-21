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

function Partition(arr, left, right)
{
	let key = arr[left];		// 将一个数作为基准值
	let i = left, j = right;
 
	while(i < j)
	{
		// 从最右边找第一个小于基准值的数字
		while(i < j && arr[j] >= key) j--;
		arr[i] = arr[j];	// 放在基准值左边
 
		// 从最左边找第一个大于基准值的数字
		while(i < j && arr[i] <= key) i++;
		arr[j] = arr[i];	// 放在基准值的右边
	}
 
	arr[i] = key;		    // 确定基准值的位置
	return i;				// 返回基准值的位置
}
 
function QuickSort1(arr, n)
{
	if (n <= 1) return;
	let SStack =[];
 
	// 将最大的区间压入栈
	SStack.unshift(0);
	SStack.unshift(n-1);
 
	let left, right, mid;
	while(SStack.length>0)
	{   // 注意按相反的顺序取出两边大小
 
		right = SStack.top();
		SStack.pop();
		left = SStack.top();
		SStack.pop();
 
		// 计算基准值的位置进行新子区间划分
		mid = Partition(arr, left, right);
	
		// 将左边新区间入栈
		if (mid-1 > left)
		{
			SStack.push(left);
			SStack.push(mid-1);
		}
 
		//将右边新区间入栈
		if (mid+1 < right)
		{
			SStack.push(mid+1);
			SStack.push(right);
		}
	}
