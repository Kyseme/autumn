/**数组中只出现一次的数字
 * 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
 * 请写程序找出这两个只出现一次的数字。
 * 
 * 异或运算
 */

 var arr = [2,4,3,6,3,2,5,5];
 arr = [2,4,3,6,3,2,5,5]
 function FindNumsAppearOnce(array)
 {
     if(array==null){
         return;
     }
     var obj = {};

    for(let i = 0;i<array.length;i++){
        if(obj[array[i]]){
            ++obj[array[i]];
        }else{
            obj[array[i]]=1;
        }
    }
     var results = [];
     for(let i in obj){
         console.log(i)
         if(obj[i]===1){
            results.push(i);
         }
     }
     return results.toString();
 }

//  console.log(FindNumsAppearOnce(arr));

function add(){
    var a = {name:'sqw'};
    return a;
}

console.log(add());
var b = add();
console.log(b)
b.name = 'sun';
console.log(b)
console.log(add());