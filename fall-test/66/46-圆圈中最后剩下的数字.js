/**圆圈中最后剩下的数字
 * 每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。
 * HF作为牛客的资深元老,自然也准备了一些小游戏。
 * 其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。
 * 然后,他随机指定一个数m,让编号为0的小朋友开始报数。
 * 每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,
 * 并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....
 * 直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。
 * 请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)
 */

var arr = [0,1,2,3,4];
var m = 3;
function LastRemaining_Solution(n, m) {
    if (n < 1 || m < 1) {
        return -1;
    }
    let i = 0;
    let numbers = [];
    for(i=0;i<n;i++){
        numbers.push(i);
    }
    console.log(numbers)
    let current = 0;
    while(numbers.length>1){
        for(let j = 1;j<m;j++){
            current++;
            if(current===numbers.length-1){
                current = 0;
            }
        }
        let next = ++current;
        if(next == numbers.length-1){
            next = 0;
        }
        --current;
        numbers.splice(current,1);
        current = next;
    }
    return current;
}

// LastRemaining_Solution(5,3);