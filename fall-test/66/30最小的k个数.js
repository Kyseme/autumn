/**最小的K个数
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 */

var arr =[4,5,1,6,2,7,3,8];

function GetLeastNumbers_Solution(input, k)
{
    let list = [];
    if(input.length<k || k==0){
        return list;
    }
    for(let i =0;i<k;i++){
        list.push(input[i]);
    }
    for(let i = k;i<input.length;i++){
        let j = getMaxNum(list);
        let temp = list[j];
        if (input[i] < temp){
            list[j] = input[i];
        }
           
    }
    return list.sort();
}

function getMaxNum(list){
    let max = list[0];
    let j = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i]> max) {
            max = list[i];
            j = i;
        }
    }
    return j;
}

console.log(GetLeastNumbers_Solution(arr,4));