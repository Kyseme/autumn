/**平衡二叉树
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot)
{
    if(pRoot==null) return true;
    if(Math.abs(getDepth(pRoot.left)-getDepth(pRoot.right))>1){
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}


function getDepth(root){
    if(root==null) return 0;
    return 1+Math.max(getDepth(root.left),getDepth(root.right));
}