请使用 JavaScript 实现一个 getIntersection 函数，可获取多个区间的交集，规则如下：
区间用长度为 2 的数字数组表示，如 [2, 5] 表示区间 2 到 5（包括 2 和 5）；区间不限定方向，如 [5, 2] 等同于 [2, 5]；该方法可接收多个区间，并返回所有区间的交集（用区间表示），如空集用 null 表示。并能正确通过以下测试用例：
function getIntersection(...args) {
// your code here
}

getIntersection([1, 4], [3, 5]); // return [ 3, 4 ]
getIntersection([5, 2], [4, 9], [3, 6]); // return [ 4, 5 ]
getIntersection([1, 7], [8, 9]); // return null
getIntersection(['x', 7], [4, 9]); // return null
getIntersection([1, 2]); // return [ 1, 2 ]
getIntersection([1, 2], [2, 3]); // return [ 2, 2 ]


// 假设树的结构如下
const tree = [
{
id: 1,
name: '张三',
children: [
{
id: 2,
name: '李四',
children: [
{
id: 5,
name: '张五'
}
]
}
]
},
{
id: 6,
name: '玛丽'
}
]

// 测试用例：

// 1. 生成一颗新树，将所有节点的id，加1
console.log(treeMap(tree, node => {
let newNode = { ...node }
newNode.id = node.id + 1
return newNode
}))
// 打印的新树，应该与tree的结构一致，只是每个id自增1，老的tree，应该没有任何改动

// 2. 打印每个节点的id
treeMap(tree, node => {
console.log(node.id)
return node
});
// 应打印顺序应该是： 5，2，1，6

// 3. 对于非法输入，应直接返回第一个入参
console.log(treeMap(null)) // 输出null
console.log(treeMap(tree, true/*不是函数*/)) //输出tree


//写段代码，定义一个字符串常量，字符串中只有大小写字母和整数，输出字符串中的出现最多的数字的和？例如 ” 9fil3dj11P0jAsf11j ” 中出现最多的是11两次，输出22.
```javascript
    function findMaxSum(str) {
        let arr = str.replace(/[a-zA-Z]+/g, ',').split(',');
        let obj = {};
        console.log(arr);
        if (!arr[0]) {
            arr = arr.slice(1);
        }
        if (!arr[arr.length - 1]) {
            arr = arr.slice(0, arr.length - 1);
        }
        if (arr.length <= 0) {
            return 0;
        }
        if (arr.length === 1) {
            return arr[0];
        }
        console.log(arr);
        arr.forEach((item) => {
            if (item) {
                if (obj[item]) {
                    ++obj[item];
                } else {
                    obj[item] = 1;
                }
            }
        });
        let max = obj[arr[0]];
        let k;
        console.log(arr[0]);
        for (let i in obj) {
            if (obj[i] > max) {
                max = obj[i];
                k = i;
            }
        }
        var sum =0;
        console.log(obj);
        for (let j in obj) {
            console.log(obj[j]);
            if (obj[j] == max) {
                sum = sum + max * parseInt(j);
            }
        }
        console.log(max);
        return sum;
    }
    var fStr = "9fil3dj11P0jAsf11j";
    console.log(findMaxSum(fStr));
```