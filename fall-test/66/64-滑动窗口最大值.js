/**滑动窗口最大值
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，
 * 如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，
 * 他们的最大值分别为{4,4,6,6,6,5}； 
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：
 *  {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， 
 * {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */
var arr = [2,3,4,2,6,2,5,1];
var arr = [1,3,5,7,9,11,13,15];
maxInWindows(arr,4);
function maxInWindows(num, size)
{
    if(num == null || num.length <=0 || size <=0){
        return [];
    }
    var i =0;
    var result = [];
    var temp = [];
    if(num.length<size) return [];
    while(i<num.length-size+1){
        temp = num.slice(i,i+size);
        result.push(max(temp));
        ++i;
    }
    console.log(result);
    return result;
}
function max(arr){
   let max = arr[0];
   for(let i=1;i<arr.length;i++){
        if(arr[i]>max) max = arr[i];
   }
   return max;
}