/**第一个只出现一次的字符
 * 
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */

function FirstNotRepeatingChar(str)
{
    if(str==null || str.length<1){
        return -1;
    }
    var obj = {};
    for(let i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]] = {index:i,count:1};
        }else{
            ++obj[str[i]].count;
        }
    }
    for (let i in obj) {
        if (obj[i].count == 1) {
            return obj[i].index;
        }
    }
    return -1;
}
var str = 'abcferwegdsfwerw';

console.log(FirstNotRepeatingChar(str));