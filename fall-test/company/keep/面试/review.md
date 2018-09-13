
一面：
1.js或者dom的几种方式
2.对es6有了解吗？简单说一下es6的特性
3.看你用过react说一下react的生命周期？
4.react的如何获取到dom？refs用过吗？
5.react中key有什么作用？
6.说一下css的盒子模型，如何设置一个div为怪异盒子？
7.写一个动画，一个盒子先向右移动20px,然后向左边移动20px
8.css中获取第n个子标签，如何实现？
9.
```javascript
    setTimeout(function(){
    console.log(2);
})

new Promise((resolve,reject)=>{
    setTimeout(function(){
         resolve(3); 
    })
}).then((res)=>{console.log(res)});
```
```javascript
    setTimeout(function(){
    console.log(2);
})

new Promise((resolve,reject)=>{
    resolve(3); 
}).then((res)=>{console.log(res)});
```
上面两个程序的打印顺序
10.正则表达式了解吗?\b \s \w代表什么意思？
11.给你一个网址，https://www.a.com?name=123&pwd=123,用正则表达式实现获取到name和pwd后面的123
12.git命令中如何新建分支？用过reset命令吗？revert命令呢？
13.了解过js的设计模式吗？说一下你知道的设计模式
14.你知道设计模式有什么规则吗？

二面
1.单页面首屏白屏如何解决？为什么会有白屏？
2.写一个功能监测页面开始加载到最后渲染完成中间的过程？
3.移动端如何优化使页面加载和渲染速度加快？
4.说一下从网页输入url到整个页面渲染完成经历了什么过程？
5.给一个编程题，将虚拟dom转化为真实dom的一个小例子
```javascript
    var obj = {
        type : 'ul',
        props : [{className:'box'},{id:'ul'}],
        children:[{
            type: 'li',
            props : [{class:'on'}],
        },{
            type: 'li',
            props : [{class:'on'}],
        }]
    }
```
转换成
```html
<ul class="box" id="ul">
    <li class="on"></li>
    <li class="on"></li>
</ul>
```
这只是一个简单的例子，关于虚拟dom的原理，可以看https://github.com/snabbdom/snabbdom源码解析
5.平时怎么学习前端，我是非计算机专业的

三面 hr面
1.了解过keep吗？
2.之前看你有实习，说一下实习的收获，为什么不考虑留在原公司？
3.你对工作地点有什么要求？
4.有什么想问他的？
5.目前有收到哪些offer？你更意向去哪个公司？

昨天下午刚面完，昨天晚上就收到电话今天去现场签录用意向书，真的很迅速。

