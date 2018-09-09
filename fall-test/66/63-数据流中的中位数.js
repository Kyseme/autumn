/**数据流中的中位数
 * 如何得到一个数据流中的中位数？
 * 如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
 */
var arr = [];
function Insert(num)
{
   if(arr.length==0 || num <arr[0]){
       list.unshift(num);
   }else{
       let flag = false;
       for(let a of arr){
           if(num<a){
               let index = arr.indexOf(a);
               arr.splice(index,0,num);
               flag = true;
               break;
           }
       }
       if(!flag){
           arr.push(num);
       }
   }
}
function GetMedian(){
    let len = arr.length;
    if(len==0) return -1;
    if(len&1 == 1){
        let i = (len-1)/2;
        return arr[i];
    }else{
        let i = len/2;
        return (arr[i]+arr[i-1])/2;
    }
}
	