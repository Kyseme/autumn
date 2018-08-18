/**
 * 小易有一些彩色的砖块。每种颜色由一个大写字母表示。
 * 各个颜色砖块看起来都完全一样。现在有一个给定的字符串s,
 * s中每个字符代表小易的某个砖块的颜色。小易想把他所有的砖块排成一行。
 * 如果最多存在一对不同颜色的相邻砖块,那么这行砖块就很漂亮的。
 * 请你帮助小易计算有多少种方式将他所有砖块排成漂亮的一行。
 * (如果两种方式所对应的砖块颜色序列是相同的,那么认为这两种方式是一样的。)
例如: s = "ABAB",那么小易有六种排列的结果:
"AABB","ABAB","ABBA","BAAB","BABA","BBAA"
其中只有"AABB"和"BBAA"满足最多只有一对不同颜色的相邻砖块。 
输入描述:
输入包括一个字符串s,字符串s的长度length(1 ≤ length ≤ 50),s中的每一个字符都为一个大写字母(A到Z)。


输出描述:
输出一个整数,表示小易可以有多少种方式。

输入例子1:
ABAB

输出例子1:
2
 */

function findColorCount(arr){
    var obj = {};
    if(arr==null||arr.length<=0){
        return 0;
    }
    arr.forEach((item)=>{
        if(!obj[item]){
            obj[item] = 1;
        }else{
            ++obj[item];
        }
    })

    if(Object.keys(obj).length>2) return 0;

}

/**
 * 如果一个01串任意两个相邻位置的字符都是不一样的,我们就叫这个01串为交错01串。
 * 例如: "1","10101","0101010"都是交错01串。
小易现在有一个01串s,小易想找出一个最长的连续子串,
并且这个子串是一个交错01串。小易需要你帮帮忙求出最长的这样的子串的长度是多少。 
输入描述:

输入描述:
输入包括字符串s,s的长度length(1 ≤ length ≤ 50),字符串中只包含'0'和'1'


输出描述:
输出一个整数,表示最长的满足要求的子串长度。

输入例子1:
111101111

输出例子1:
3
 */
var str = '111101111'
console.log(find01Str(str));
function find01Str(str){

    if(str==null||str.length<=0){
        return 0;
    }

    var result = [];
    var start = str[0];
    var index = 0;
    while(index<str.length-1){
        if(str[index]!=str[++index] && index<str.length){
            var count = 2;
            while(str[index]!=str[++index] && index<str.length){
                ++count;
            }
            result.push(count);  
        }
    }
    let res = result[0];
    for(let i=1;i<result.length;i++){
        if(res<result[i]){
          res = result[i];
        }
    }
    return res;
}

let lines = readline().split('');
let temp = lines[0]; //取数组的第一个为temp，比如说是0
let len = 1;
let maxLen = 1;
for (let i = 1; i < lines.length; i++) {
    //计算出从下一个数字开始的非0个数。特别巧妙，注意i从1开始
    if (lines[i] != temp) {
        len++;
    }
    else {
        len = 1; //一旦遇到当前值和临时值相等时，len重置为1
    }
    //将temp设为当前i
    temp = lines[i];
    // 设置maxLen是为了怕len又重置为1了
    if (maxLen < len) {
        maxLen = len
    }
}
console.log(maxLen);