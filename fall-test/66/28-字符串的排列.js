/**字符串的排列
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串
 * abc,acb,bac,bca,cab和cba
 */

 /**
字典排序：
第一步：从右至左找第一个左邻小于右邻的数，记下位置i，值list[a]
第二部：从右边往左找第一个右边大于list[i]的第一个值，记下位置j，值list[j] 
第三步：交换list[i]和list[j]的值
第四步：将i以后的元素重新按从小到大的顺序排列

  */

// function Permutation(str)
// {
//     var arr = str.split('');
//     arr = arr.sort();
//     while(true){
//         console.log(arr.toString());
//         let j = arr.length - 1;
//         let index = 0;
//         for(j=arr.length-2;j>=0;j--){
//             if(arr[j]<arr[j+1]){
//                 index = j;
//                 break;
//             }else if(j==0){
//                 return;
//             }

//         }
//         for(j=arr.length-1;j>=0;j--){
//             if(arr[j]>arr[index]){
//                 break;
//             }
//         }
//         swap(arr,index,j);
//         //将index以后的元素重新按从小到大的顺序排列
//         orderArr(arr,index+1);

//     }
// }

// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// function orderArr(arr,i){
//     let k = i;
//     let j = arr.length-1;
//     while(k<j){
//         swap(arr, k, j);
//         k++;
//         j--;
//     }
// };
var res = [];
function Permutation(str)
{
    if(str==null)return;
    var arr = str.split('');
    arr = arr.sort();
    while(true){
        res.push(arr.toString());
        var index = 0;
        var j = arr.length - 1;
        for(j=arr.length-2;j>=0;j--){
            if(arr[j]<arr[j+1]){
                index = j;
                break;
            }else if(j==0){
                return res;
            }

        }
        for(j=arr.length-1;j>=0;j--){
            if(arr[j]>arr[index]){
                break;
            }
        }
        swap(arr,index,j);
        //将index以后的元素重新按从小到大的顺序排列
        orderArr(arr,index+1);

    }
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function orderArr(arr,i){
    let k = i;
    let j = arr.length-1;
    while(k<j){
        swap(arr, k, j);
        k++;
        j--;
    }
};
var str = 'abcd';
console.log(Permutation(str));