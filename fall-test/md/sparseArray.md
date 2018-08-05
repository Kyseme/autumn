稀疏数组——具有不连续索引的数组，其length属性值大于元素的个数。
密集数组——具有连续索引的数组，其length属性值等于元素的个数。
### 稀疏矩阵
如何产生稀疏数组
```javascript
    // 用Array()构造函数。
    var a = new Array(5);
    a.length; //5
    0 in a //false;
    a //(5) [empty × 5]

    // 在数组直接量中省略值。
    var aa = [,,,];
    aa.length; //3 js 在定义数组的时候允许最后一个元素后跟一个,
    aa //(5) [empty × 3]  
    // 指定数组的索引值大于当前的数组长度。
    var aaa = [];
    aaa[1000] = 0;
    aaa.forEach(function (x, i) { console.log(i+". "+x) });//1000 . 0

    // 用delete操作符。
    var aaaa = [1,2,3];
    delete aaaa[1];
```


在稀疏数组上调用数组遍历方法
`Array.prototype.forEach(callback[,thisArg])`
`Array.prototype.map(callback[,thisArg])`
`Array.prototype.filter(callback[,thisArg])`

- 以上三个数组遍历方法都callback函数都不会处理稀疏数组的缺失元素；
- 但map函数返回的结果数组具有（与稀疏数组）相同的长度、相同的缺失元素；
- 而filter函数则直接返回密集数组，忽略稀疏数组中缺失的元素。

### 密集矩阵
在java和C语言中，数组是一片连续的存储空间，有着固定的长度
```javascript
    var data = [3,1,6,9,2];

    var a = Array.apply(null, Array(3)); 
    a //(3) [undefined, undefined, undefined]
    a.forEach(function (x, i) { console.log(i+". "+x) });
    // 0. undefined
    // 1. undefined
    // 2. undefined
```
等同于
```javascript
    Array(undefined, undefined, undefined)
```

实际上,JavaScript并没有常规的数组,所有的数组其实就是个对象,只不过会自动管理一些"数字"属性和length属性罢了.说的更直接一点,JavaScript中的数组根本没有索引,因为索引应该是数字,而JavaScript中数组的索引其实是字符串.arr[1]其实就是arr["1"],给arr["1000"] = 1,arr.length也会自动变为1001.这些表现的根本原因就是,JavaScript中的对象就是字符串到任意值的键值对.注意键只能是字符串.这和AWK类似.不信可以试试awk 'BEGIN{a[1]=1;print(a["1"])}'

参考
- [稀疏矩阵](http://www.cnblogs.com/ziyunfei/archive/2012/09/16/2687165.html)