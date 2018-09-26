作者：sunine
链接：https://www.nowcoder.com/discuss/110004
来源：牛客网

1.介绍一下TCP
2.介绍一下Http,写一个http请求报文头
3.介绍一下三次握手与四次挥手，两次握手可不可以？如果两次握手中间会出现什么问题
4.介绍一下线程和进程的区别？
5.介绍一下js的构造函数里面有什么操作
6.new一个对象中间做了什么操作
7.介绍一下prototype
8.写一个promise
9.async和generator有什么区别，写一个async和generator函数，并介绍区别
10.
1
2
3
4
5
6
7
8
9
for(var i = 0;i<5;i++){
 
setTimeout(function(){
 
console.log(i);
 
},1000);
 
}
用promise和async实现每间隔1s,2s,3s...打印i
11.实现类似与java的多线程打印
var a = [1,2,3,4];
 
var b = ['a','b','c'];
 
//实现交替打印1a2b3c4