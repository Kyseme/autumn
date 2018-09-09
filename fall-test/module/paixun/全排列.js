allOrder(['A','B','C'],0);
function allOrder(arr,start){
    if(start === arr.length-1){
        console.log(arr);
    }else{
        for(let i=start;i<arr.length;i++){
            if(i==start || arr[i]!=arr[start]){
                swap(arr,i,start);
                allOrder(arr,start+1);
                swap(arr,i,start);
            }
        }
    }

}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}