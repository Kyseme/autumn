/**扑克牌顺子
 * LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
 * 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！
 * “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,
 * 决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。
 * 上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。
 * LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 
 * 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。
 */

 /**
  * 1. 数组排序    2. 统计数组中0的个数  3.统计排序之后的数组相邻数字之间的空缺总数
  */
var num = [1,3,0,0,5];
console.log(IsContinuous(num));
function IsContinuous(numbers)
{
    if(numbers == null || numbers.length<1){
        return false;
    }
    numbers = numbers.sort();
    console.log(numbers)
    let numberOfZero = 0;
    let numberOfGap = 0;

    //统计数据中0的个数
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]==0){
            ++numberOfZero;
        }else{
            break;
        }
    }
    console.log(numberOfZero)
    //统计数组中的间隔数目
    let small = numberOfZero;
    let big = small+1;
    while(big<numbers.length){
        //两个数字相等，有对子，不可能是顺子
        if(numbers[small]==numbers[big]){
            return false;
        }
        numberOfGap = numbers[big]-numbers[small]-1 +numberOfGap;
        small = big;
        ++big;
    }
    console.log(numberOfGap)
    return numberOfGap>numberOfZero?false:true;
}