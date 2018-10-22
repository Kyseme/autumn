/**
 * 请实现下面的链式调用函数，以使其能够实现链式调用
时间限制：C/C++语言 1000MS；其他语言 3000MS
内存限制：C/C++语言 65536KB；其他语言 589824KB
题目描述：
仅限Javascript语言：

请实现下面的链式调用函数，以使其能够实现链式调用

var num = new Sub(0).add(100).add(50).add(-30).getResult();

console.log(num) ==> 120

------

var Sub = function(initValue) {
//请在此处编写你的代码，其他部分请勿修改，否则不记分。
//begin

//end
}
// 以下代码请勿修改
var s = read_line()
print(eval(s))


输入
Sub为一个function，请补充Sub内的逻辑部分

使其能够链式调用，初始值默认为0，链式调用add方法进行数字累加，如果add方法传入的数字非法则不进行累加

最终调用getResult()可以获得累加的结果

输出
最终调用getResult()可以获得累加的结果，将累加的数字返回即可


样例输入
new Sub(0).add(100).add(50).add(-30).getResult();
样例输出
120
 */


var Sub = function(initValue) {
   this.initValue = initValue || 0;
   this.add = function(val){
        if(typeof val === 'number'){
            this.initValue = this.initValue+val;
        }
        return this;
   };
   this.getResult = function(){
        return this.initValue;
   };
};
var sub = new Sub(5);
sub.add(9).add(4).getResult();
   