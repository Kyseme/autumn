/**数组中重复的数字
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 
 * 数组中某些数字是重复的，但不知道有几个数字是重复的。
 * 也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 
 * 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 * 
 * 
 * 将数组中的数字按照下标排序，使第数字n位于下标为n的位置
 * {2,3,1,0,2,5,3}，首先获取2，将下标为2的数字1和2调换位置，获得{1,3,2,0,2,5,3}
 * - 获取1，将下标为1的数字3和1调换，获得{3,1,2,0,2,5,3}
 * - 获取3，将下标为3的数字0和3调换，获得{0,1,2,3,2,5,3}
 */

/**
 * 
 * @param {*} numbers 
 * @param {*} duplication 
 * 
 * 
 */
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    if(numbers == null || numbers.length<=0){
        return false;
    }
    var len = numbers.length;
    for(let i = 0;i<len;i++){
        if(numbers[i]<0||numbers[i]>len){
            return false;
        }
    }
    for(let i=0;i<len;i++){
        while(numbers[i]!=i){
            if(numbers[i] === numbers[numbers[i]]){
                duplication[0] = numbers[i];
                return true;
            }
            let t = numbers[i];
            numbers[i] = numbers[t];
            numbers[t] = t;
        }
    }
    return false;
}
var arr = [3,1,2,0,2,5,3];
console.log(duplicate(arr,[]));