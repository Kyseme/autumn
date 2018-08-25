//全排列

// console.log(permute([1,0]));

function permute(nums) {
    var list = [];
    backtrack(list,nums,0);
    return list;
};

function backtrack(list,nums,start){
    if(start==nums.length-1){
        list.push(nums);
    }else{
        for(let i=start;i<nums.length;i++){
            swap(nums,i,start);
            backtrack(list,nums,start+1);
            swap(nums,i,start);
        }
    }
   
}
function swap(arr,i,j){
    let temp;
    temp = arr[i];
    arr[i]= arr[j];
    arr[j] = temp;
}
allOrder([1,2,3],0)
function allOrder(arr, start) {
    if (start === arr.length - 1)//如果已经到了数组的最后一个元素，前面的元素已经排好，输出。
    {
        console.log(arr.toString());
        console.log('****');
    }
    else {
        for (var i = start; i < arr.length; i++) {
            //把第一个元素分别与后面的元素进行交换，递归的调用其子数组进行排序
            swap(arr,i,start);
            allOrder(arr, start + 1);
            //子数组排序返回后要将第一个元素交换回来。  
            //如果不交换回来会出错，比如说第一次1、2交换，第一个位置为2，子数组排序返回后如果不将1、2
            //交换回来第二次交换的时候就会将2、3交换，因此必须将1、2交换使1还是在第一个位置 
            swap(arr,i, start);
        }
    }

}