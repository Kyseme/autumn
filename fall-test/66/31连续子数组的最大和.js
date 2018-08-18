/**
 * 连续子数组的最大和
 * 在古老的一维模式识别中,常常需要计算连续子向量的最大和,
 * 当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,
 * 是否应该包含某个负数,并期望旁边的正数会弥补它呢？
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8
 * (从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和
 */
/**
 * 动态规划
 * 
 * f(i)     pData[i];  i=0;
 *          f(i-1)+pData[i]; 
 */
var arr = [6,-3,-2,7,-15,1,2,2];
function FindGreatestSumOfSubArray(array){
    if(array==null || array.length<1){
        return 0;
    }
    var sum = [];
    // sum.length = array.length;
    sum[0] = array[0];
    for(let i=1;i<array.length;i++){
        sum[i] = Math.max(sum[i-1]+array[i],array[i]);
    }
    // console.log(sum);
    var max = sum[0];
    //找到最大的sum
    for(let i=1;i<sum.length;i++){
        if(sum[i]>max){
            max = sum[i];
        }
    }
    return max;
}


console.log(FindGreatestSumOfSubArray(arr))

