/**
 * 数组中出现次数超过一半的数字
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 */

function MoreThanHalfNum_Solution(numbers)
{
    if(numbers==null || numbers.length<=0){
        return 0;
    }
    let obj = {};
    let len = numbers.length;
    numbers.forEach(function(item){
        if(obj[item]){
            ++obj[item];
        }else{
            obj[item]=1;
        }
    })
    let sm = Math.floor(len/2);
    for(let i in obj){
        if(obj[i]>sm){
            return i;
        }
    }
    return 0;
}
    
var arr = [1,2,3,2,2,2,5,4,2];
console.log(MoreThanHalfNum_Solution(arr));