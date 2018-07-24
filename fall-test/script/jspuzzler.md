```javascript
[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]

var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
//it actually prints 'Something' the + operator has higher precedence than the ternary one.

```

```javascript
// forEach filter未初始化的项将被跳过（但不包括那些值为 undefined 的项）

    var ary = [0,1,2];
    ary[10] = 10;//ary[3]...ary[9]没有被初始化则不会出现在循坏中
    ary.filter(function(x) { return x === undefined;});
    //[]
```

```javascript
    var two   = 0.2
    var one   = 0.1
    var eight = 0.8
    var six   = 0.6
    [two - one == one, eight - six == two] //true false
```
JS中将数字转为为二进制存储,0.2,0.1,0.8,0.6转为为二进制都是无限不循环小数，这里0.2-0.1===0.1之所以成立，是因为0.2是0.1的2倍，在二进制中只需要小数点向右移动一位即可，所以0.2-0.1===0.1，类似的，0,4-0.2===0.2,0.6-0.3===0.3也成立.

```javascript
    function showCase(value) {
        switch(value) {
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefined');
            break;
        default:
            console.log('Do not know!');
        }
    }
    showCase(new String('A'));
```
关于switch的一个题目，switch里面的比较是===，new String('A')新创建了一个对象，new String('A')!=='A'; new String('A') == 'A' 返回true

```javascript
    function isOdd(num) {
        return num % 2 == 1;
    }
    function isEven(num) {
        return num % 2 == 0;
    }
    function isSane(num) {
        return isEven(num) || isOdd(num);
    }
    var values = [7, 4, '13', -9, Infinity];
    values.map(isSane);

    //Infinity % 2 返回 NaN, -9 % 2 返回 -1

    /**************************/
    var a = [0];
    if ([0]) {
        console.log(a == true);
    } else {
        console.log("wut");
    }    \
    //[0]作为布尔值被认为真，被当做其他形式则根据比较对象进行转化

    /**************************/
    []==[] //false

    /**************************/
    '5' + 3     //53
    '5' - 3     //2
    // Strings know about + and will use it, but they are ignorant of - so in that case the strings get converted to numbers.
     1 + - + + + - + 1  //++ -- 负负为正

    /**************************/
    function sidEffecting(ary) {
        ary[0] = ary[2];
    }
    function bar(a,b,c) {
        c = 10
        console.log(arguments);
        sidEffecting(arguments);
        return a + b + c;
    }
    bar(1,1,1)
    //javascript变量绑定到arguments对象，因此更改变量更改参数和更改参数会更改局部变量

    function sidEffecting(ary) {
        ary[0] = ary[2];
    }
    function bar(a,b,c=3) {
        c = 10
        sidEffecting(arguments);
        return a + b + c;
    }
    bar(1,1,1); //12 
    //当有默认参数的时候 arguments中的值和参数中的值不对应
```

```javascript
    var a = 111111111111111110000,
        b = 1111;
    a + b;
```
解释是Lack of precision for numbers in JavaScript affects both small and big numbers.不太懂

```javascript
    var x = [].reverse;
    x();

    Array.prototype.reverse.apply([1,2])
```
chrome浏览器报错Uncaught TypeError: Array.prototype.reverse called on null or undefined at reverse (native)

```javascript
    Number.MIN_VALUE > 0  //false
```
`The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript.`是一个大于0的数值,[数值](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

```javascript
    [1 < 2 < 3, 3 < 2 < 1] //[true,true]
    // 等价于
    //  1 < 2 => true;
    //  true < 3 =>  1 < 3 => true;
    //  3 < 2 => false;
    //  false < 1 => 0 < 1 => true;
```
```javascript
    2 == [[[2]]]
```
数字和对象进行比较,`[[[2]]].toString() '2'==2`,返回true

```javascript
    3.toString() //error
    3..toString()       //3
    3...toString()  //error
```
为什么第一个会报错？在js中.是一个有效的精度,第一个点被当作数字的精度处理了,第二个点才是链式函数调用`(3).toString()  3`



The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. ReturnIfAbrupt(x).
2. ReturnIfAbrupt(y).
3. If Type(x) is the same as Type(y), then
    Return the result of performing Strict Equality Comparison x === y.
4. If x is null and y is undefined, return true.
5. If x is undefined and y is null, return true.
6. If Type(x) is Number and Type(y) is String,
    return the result of the comparison x == ToNumber(y).
7. If Type(x) is String and Type(y) is Number,
    return the result of the comparison ToNumber(x) == y.
8. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
9. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
10. If Type(x) is either String, Number, or Symbol and Type(y) is Object, then
    return the result of the comparison x == ToPrimitive(y).
11. If Type(x) is Object and Type(y) is either String, Number, or Symbol, then
    return the result of the comparison ToPrimitive(x) == y.
12. Return false.
[ecma](http://www.ecma-international.org/ecma-262/6.0/#sec-equality-operators)
