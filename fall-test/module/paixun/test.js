var arr = [6,1,2,7,9,3,4,5,10,8];
quicksort(0,arr.length-1,arr);
// console.log(arr);
function quicksort(left,right,arr){
    var i,j,temp;
    if(left>=right){
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
    quicksort(left,i-1,arr);
    quicksort(i+1,right,arr);
}

var obj = {name:'sunine'};
var num = 2;
function add(obj,n){
    obj.type = 'name';
    n = 10;
}
add(obj,num);
console.log(obj);
console.log(num);