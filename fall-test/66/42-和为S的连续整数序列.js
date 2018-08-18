/**和为S的连续正数序列
 * 
 * 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,
 * 他马上就写出了正确答案是100。但是他并不满足于此,
 * 他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? 
 * 
 * 
 * 两个数字记录结束序列的最大最小数   small big  中间值，big不能大于中间值
 */

function FindContinuousSequence(sum) {
    if (sum < 3) {
        return;
    }
    let small = 1;
    let big = 2;
    let mid = Math.floor(sum + 1);

    let curSum = small + big;
    while (small < mid) {
        if (curSum == sum) {
           getArr(small, big);
        }
        while (curSum > sum && small < mid) {
            curSum = curSum - small;
            small++;
            if (curSum == sum) {
                getArr(small, big);
            }
        }
        big++;
        curSum = curSum + big;
    }
}

function getArr(small, big) {
    if(small == big) return;
    let results = [];
    for (let i = small; i <= big; i++) {
        results.push(i);
    }
    console.log(results.toString());
}
 
FindContinuousSequence(15);