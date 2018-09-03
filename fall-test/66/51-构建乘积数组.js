/**构建乘积数组
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 */

/**
 * 如果可以使用除法，可以是B[i] = A[0]*A[1]*..A[n-1]/A[i];
 * 
 *      ---------------------------------------------
 * B0     1 | A1 | A2 | A3  |  A4 |  A5 | ..
 *      ----------------------------------------------
 * B1    A0 |  1 | A2 | A3  | A4  |  A5 |  ..
 *      ----------------------------------------------
 * B2    A0 | A1 | 1  | A3  |  A4 |  A5 |  ...
 *      ----------------------------------------------
 * B3
 * ..
 */
function multiply(array)
{
   if(array==null || array.length<=0){
       return;
   }
   var len = array.length;
   var result = [];
   result.length = len;
   result[0] = 1;
   for(let i=1;i<len;i++){
        result[i] = result[i-1]*array[i-1];
   }
   console.log(result);
   let temp = 1;
   for(let i=len-2;i>=0;--i){
       temp = temp*array[i+1];
       result[i] = result[i]*temp;
   }
   console.log(result);
}
var arr = [1,2,3,4,5];
multiply(arr);