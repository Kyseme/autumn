/**
 * 对于字符串x和y, 如果擦除x中的某些字母(有可能全擦掉或者都不擦)能够得到y,我们就称y是x的子序列。例如."ncd"是"nowcoder"的子序列,而"xt"不是。
现在对于给定的一个字符串s,请计算出字典序最大的s的子序列。 
输入描述:
输入包括一行,一个字符串s,字符串s长度length(1 ≤ length ≤ 50).
s中每个字符都是小写字母


输出描述:
输出一个字符串,即字典序最大的s的子序列。

输入例子1:
test

输出例子1:
tt
 */

 //字典序列 按照字典顺序排列 
 
 //从后往前找，前者比后者大则保留,否则，删除掉,最后一个字母在最后一位

// while(line=readLine()){
//     var str = line.trim();
//     var res = findMax(str);
//     print(res);
// }
function findMax(str) {
    let len = str.length;
    let max = str[len - 1];
    let ans = [max];
    for (let i = len - 2; i >=0; i--) {
        if (str[i] >= max) {
            ans.unshift(str[i]);
            max = str[i];
        }
    }
    return ans.join('');
}
// findMax('test');

//dom操作


