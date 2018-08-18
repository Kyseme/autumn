/** 二叉树的后续遍历
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */

function VerifySquenceOfBST(sequence)
{
   if(sequence==null || sequence.length<1){
       return false;
   }
   let len = sequence.length;
   let root = sequence[len-1];
   //在二叉搜索数中左子树值小于根节点的值
   let i =0;
   for(;i<len-1;i++){
       if(sequence[i]>root){
            break;
       }
   }
   //在二叉搜索数中右子树值大于根节点的值
   let j = i;
   for(;j<len-1;j++){
       if(sequence[j]<root){
           return false;
       }
   }
    let left = true;
        //判断左子树是不是二叉搜索树
    if(i>0){
       left = VerifySquenceOfBST(sequence.slice(0,i));
    }
  
  
   //判断右子树是不是二叉搜索树
    let right = true;
    if(i<len-1){
        right = VerifySquenceOfBST(sequence.slice(i,-1));
    }
    return (left&&right);
}
var arr = [5,7,6,9,11,10,8];
console.log(VerifySquenceOfBST(arr));