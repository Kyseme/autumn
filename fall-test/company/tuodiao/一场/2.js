
/**
>3
>1,10;32,45
>78,94;5,16
>80,100;200,220;16,32 * 

1,45;78,100;200,220
 */

var n = 3;
var arr = [[1,10],[32,45],[78,94],[5,16],[80,100],[200,220],[16,32]];
function bubbleSort(arr){
    let len = arr.length;
    for(let i =0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j][0]>arr[j+1][0]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
bubbleSort(arr);

mergeArr(arr);
function mergeArr(arr){
    var result = [];
    for(let i=0;i<arr.length-1;i++){
        i = findCommon(arr,arr[i],arr[i+1],i);
    }

    for(let i=0;i<arr.length;i++){
        
    }
    return arr.join(';');
}
function findCommon(arr,num1,num2,i){
    if(num1[1]<num2[0]){
        return i;
    }
    if(num1[1]>=num2[0] && num1[1]<=num2[1]){
        arr[i][1] = num2[1];
        arr.splice(i+1,1);
        i--;
        return i;
    }
    if(num1[0]<=num2[0] && num1[1]>=num2[1]){
        arr.splice(i+1,1);
        i--;
        return i;
    }
    return i;
}


