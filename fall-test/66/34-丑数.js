/**
 * 丑数
 * 
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */
console.log(GetUglyNumber_Solution(9));
function GetUglyNumber_Solution(index) {
    if(index<=0){
        return 0;
    }
    var pUglyNumbers = [];
    pUglyNumbers.length = index;
    pUglyNumbers[0] = 1;
    var nextUglyIndex = 1;
    var p2 = 0;
    var p3 = 0;
    var p5 = 0;
    while(nextUglyIndex<index){
        let min = minNumber(pUglyNumbers[p2] * 2, pUglyNumbers[p3] * 3, pUglyNumbers[p5] * 5);
        pUglyNumbers[nextUglyIndex] = min;
        while (pUglyNumbers[p2] * 2 <= pUglyNumbers[nextUglyIndex]) {
            p2++;
          
        }
        while (pUglyNumbers[p3] * 3 <= pUglyNumbers[nextUglyIndex]) {
            p3++;
        }
        while (pUglyNumbers[p5] * 5 <= pUglyNumbers[nextUglyIndex]) {
            p5++;
        }
        nextUglyIndex++;
    }
    return pUglyNumbers[nextUglyIndex - 1];
}
function minNumber(n1, n2, n3) {
    let min = n1 < n2 ? n1 : n2;
    return min < n3 ? min : n3;
}