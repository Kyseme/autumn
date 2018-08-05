/*
倒计时是web开发中常见的组件，请完成second和render两个函数，完成倒计时的显示部分
1、second函数的输入为整数，返回{day: Int, hour: Int, min: Int, second: Int}
2、render函数的输入为second函数的输入，将数据在页面对应的DOM元素上显示出来，格式如html所示
3、如果day为0，隐藏对应的DOM元素，否则显示（请直接使用已经实现的css代码）
4、数值不足两位，前面补充0 

document查找元素 querySelector() 返回文档中指定选择器或者选择器组匹配第一个html元素
*/

function second(second) {
    var obj = {};
    var data = new Date(second*1000);
    // var day = Math.floor(second/3600/24);
    // obj.day = day>=0?day:0;
    // obj.hour = Math.floor((second - day*3600*24)/3600);
    // obj.min = second%3600;
    // obj.second = second%60;
    obj.day = data.getUTCDate();
    obj.hour = data.getUTCHours();
    obj.min = data.getUTCMinutes();
    obj.second = data.getUTCSeconds();
    return obj;
}

function render(data) {
    var dom = document.getElementById('jsCountdown');
    var daydom = document.querySelector('#jsCountdown span:nth-child(1)');
    var ss = document.createDocumentFragment;
    if(obj.day>0){
        let span = document.createElement('span');
        span.textContent = data[i]+'天';
        ss.appendChild(span);
    }

    for(let i=1;i<data.length-1;i++){
        let span = document.createElement('span');
        span.textContent = data[i]+':';
        ss.appendChild(span);
    }
    let span = document.createElement('span');
    span.textContent = data.second;
    ss.appendChild(span);
    dom.appendChild(ss);
}

//字符覆盖

/**
 * 小度有一个小写字母组成的字符串s.字符串s已经被写在墙上了.
小度还有很多卡片,每个卡片上有一个小写字母,组成一个字符串t。小度可以选择字符串t中任意一个字符,
然后覆盖在字符串s的一个字符之上。小度想知道在选取一些卡片覆盖s的一些字符之后,可以得到的字典序最大的字符串是什么。 
输入描述:
输入包括两行,第一行一个字符串s,字符串s长度length(1 ≤ length ≤ 50),s中每个字符都是小写字母
第二行一个字符串t,字符串t长度length(1 ≤ length ≤ 50),t中每个字符都是小写字母

输出描述:
输出一个字符串,即可以得到的字典序最大字符串

输入例子1:
fedcba
ee

输出例子1:
feeeba
*/

function dicOrder(str,ss){
    var arr = ss.split('').sort().reverse();
    console.log(arr);
    var newStr = '';
    for(let i=0,j=0;i<str.length;i++){
        if(arr[j]>str[i]){
            newStr+=arr[j];
            j++;
        }else{
            newStr+=str[i];
        }
    }
    console.log(newStr)
    return newStr;
}

//dicOrder('ittmcsvmoa','jktvvblefw');
dicOrder('abb','c');


//请设计一个浏览器中能使用的Promise模块。包含：实现源码，使用API，以及使用Demo。