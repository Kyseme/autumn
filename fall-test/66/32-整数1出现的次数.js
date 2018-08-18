/**整数1出现的次数(从1到n整数中1出现的次数)
 * 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 * 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次
 * ,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
 * 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
 */

function NumberOf1Between1AndN_Solution(n) {
    if (n <= 0) {
        return;
    }
    let str = n + '';
    let numbers = [];
    for (let i = 0; i < str.length; i++) {
        numbers[i] = str[i] - '0';
    }
    console.log(numbers)
    return numberOf1(numbers, 0);
}
function numberOf1(numbers, curIdx) {
    if (numbers == null || curIdx >= numbers.length || curIdx < 0) {
        return 0;
    }
    // 待处理的第一个数字
    let first = numbers[curIdx];console.log(first)
    // 要处理的数字的位数
    let length = numbers.length - curIdx;
    // 如果只有一位且这一位是0返回0
    if (length == 1 && first == 0) {
        return 0;
    }
    // 如果只有一位且这一位不是0返回1
    if (length == 1 && first > 0) {
        return 1;
    }
    // 假设numbers是21345
    // numFirstDigit是数字10000-19999的第一个位中的数目
    let numFirstDigit = 0;
    // 如果最高位不是1，如21345，在[1236, 21345]中，最高位1出现的只在[10000, 19999]中，出现1的次数是10^4方个
    if (first > 1) {
        numFirstDigit = powerBase10(length - 1);
    }
    // 如果最高位是1，如12345，在[2346, 12345]中，最高位1出现的只在[10000, 12345]中，总计2345+1个
    else if (first == 1) {
        numFirstDigit = atoi(numbers, curIdx + 1) + 1;
    }
    // numOtherDigits，是[1346, 21345]中，除了第一位之外（不看21345中的第一位2）的数位中的1的数目
    let numOtherDigits = first * (length - 1) * powerBase10(length - 2);
    console.log(numOtherDigits)
    // numRecursive是1-1234中1的的数目
    let numRecursive = numberOf1(numbers, curIdx + 1);
    return numFirstDigit + numOtherDigits + numRecursive;

}

/**
* 将数字数组转换成数值，如{1, 2, 3, 4, 5}，i = 2，结果是345
*/
function atoi(numbers, i) {
    let result = +numbers.slice(i).join('');
    return result;
}
/**
 * 求10的n次方，假定n不为负数
 */
function powerBase10(n) {
    let result = Math.pow(10,n);
    return result;
}


console.log(NumberOf1Between1AndN_Solution(3313));

