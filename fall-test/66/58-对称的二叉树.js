/**对称的二叉树
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * 
 *            8
 *        ／        \
 *        6         6
 *      /   \      /  \
 *     5     7    7    5
 * 
 * 先序遍历             8-6-5-7-6-7-5(根左右))
 * 对称先序遍历          8-6-5-7-6-7-5(根右左))
 */
//比较二叉树的先序遍历和对称先序遍历是否一致从而判断是否是对称二叉树
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var eight = new TreeNode(8);
var sixL = new TreeNode(6);
var sixR = new TreeNode(6);
var fiveL = new TreeNode(5);
var fiveR = new TreeNode(5);
var sevenL = new TreeNode(7);
var sevenR = new TreeNode(7);
sixL.left = fiveL;
sixL.right = sevenL;
sixR.left = sevenR;
sixR.right = fiveR;
eight.right = sixR;
eight.left = sixL;
console.log(eight);
console.log(isSymmetrical(eight));
function isSymmetrical(pRoot)
{
    return compareNode(pRoot,pRoot);
}
function compareNode(root1,root2){
    if(root1==null && root2 == null){
        return true;
    }
    if(root1 ==null || root2 ==null){
        return false;
    }
    if(root1.val!=root2.val){
        return false;
    }
    return compareNode(root1.left,root2.right) && compareNode(root1.right,root2.left);
}