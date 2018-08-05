/**
 * 列表补全
 * 在商城的某个位置有一个商品列表，该列表是由L1、L2两个子列表拼接而成。当用户浏览并翻页时，需要从列表L1、L2中获取商品进行展示。
 * 展示规则如下：

1. 用户可以进行多次翻页，用offset表示用户在之前页面已经浏览的商品数量，比如offset为4，表示用户已经看了4个商品
2. n表示当前页面需要展示的商品数量
3. 展示商品时首先使用列表L1，如果列表L1长度不够，再从列表L2中选取商品
4. 从列表L2中补全商品时，也可能存在数量不足的情况

请根据上述规则，计算列表L1和L2中哪些商品在当前页面被展示了

输入描述:
每个测试输入包含1个测试用例，包含四个整数，分别表示偏移量offset、元素数量n，列表L1的长度l1，列表L2的长度l2

输出描述:
在一行内输出四个整数分别表示L1和L2的区间start1，end1，start2，end2，每个数字之间有一个空格。
注意，区间段使用半开半闭区间表示，即包含起点，不包含终点。如果某个列表的区间为空，使用[0, 0)表示，
如果某个列表被跳过，使用[len, len)表示，len表示列表的长度。

输入例子1:
2 4 4 4
1 2 4 4
4 1 3 3


输出例子1:
2 4 0 2
1 3 0 0
3 3 1 2
 */
var arr = [[2,4,4,4],[1,2,4,4],[4,1,3,3]]; 
//[ 3, 4, 2, 4 ], [ 4, 6, 0, 0 ], [ 3, 3, 1, 1 ] 
// let arrs =[];
// while(line=readline()){
//     var lines = line.split(' ');
//     arrs.push(lines); 
// }
// var res = count(arrs);
// print(res);
arr =[[4000,4000,4000,0]];
function count(arr) {
    if (arr.length < 1) {
        return;
    }
    let result = [];
    arr.forEach((item) => {
        let offset = item[0];
        let n = item[1];
        let l1 = item[2];
        let l2 = item[3];
        let ans = [];

        if (offset >= l1) {
            ans.push(l1);
            ans.push(l1);
            let l2s = offset - l1;
            if (l2s >= l2) {
                ans.push(l2);
                ans.push(l2);
            } else {
                ans.push(l2s);
                if (l2s + n < l2) {
                    ans.push(l2s+n);
                } else {
                    ans.push(l2);
                }

            }
        } else {
            let l1remain = l1 - offset;
            ans.push(offset);
            if (l1remain <= n) {
                ans.push(l1);
                let l2remain = n - l1remain;
                if (l2remain < l2) {
                    ans.push(0);
                    ans.push(l2remain);
                } else {
                    ans.push(0);
                    ans.push(l2);
                }
            } else {
                ans.push(offset + n);
                ans.push(0);
                ans.push(0);
            }
        }
        result.push(ans);
    })
    console.log(result.toString());
    // return result;
}


// count(arr);

/**
 *  数三角形
 * 
 * 给出平面上的n个点，现在需要你求出，在这n个点里选3个点能构成一个三角形的方案有几种。
输入描述:
第一行包含一个正整数n，表示平面上有n个点（n <= 100)
第2行到第n + 1行，每行有两个整数，表示这个点的x坐标和y坐标。(所有坐标的绝对值小于等于100，且保证所有坐标不同）

输出描述:
输出一个数，表示能构成三角形的方案数。

输入例子1:
4
0 0
0 1
1 0
1 1

输出例子1:
4
 */

//定义输入函数
// var n  = parseInt(readline().trim());
// let arr2 = [];
//  while(line=readline()){
//     for(let i=0;i<n;i++){
//         let lines = line.split(' ');
//         if(arr2.indexOf(lines)===-1){
            //     arr2.push(lines);
            // }
//        
//     }
// }
// var res = count(arrs);

function isTangle(arr){
    let n = arr.length;
    let total;
    if(n<3){
        return 0;
    }else{
        total = n*(n-1)*(n-2)/6;
    }
    //寻找在一条线上面的点
}