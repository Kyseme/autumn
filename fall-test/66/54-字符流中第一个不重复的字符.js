/**字符流中第一个不重复的字符
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。
 * 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
 * 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
 */
//Init module if you need
var obj = {};
function Init()
{
    obj = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    if(obj[ch]){
        obj[ch]++;
    }else{
        obj[ch] = 1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for(let ch in obj){
        if(obj.hasOwnProperty(ch)){
           if(obj[ch]===1){
               return ch;
           }
        }
    }
    return '#';
}