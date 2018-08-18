/**
 * 二叉树的深度
 * 
 * 输入一棵二叉树，求该树的深度。
 * 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，
 * 最长路径的长度为树的深度。
 * 
 *          a
 *         / \
 *        b   c
 *       / \   \
 *      d   e   f
 *         /
 *        g
 */

 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function TreeDepth(pRoot){
    if(pRoot==null){
        return 0;
    }
    let left = TreeDepth(pRoot.left);
    let right = TreeDepth(pRoot.right);

    return Math.max(left+1,right+1);
}

var a = new TreeNode('a');
var b = new TreeNode('b');
var c = new TreeNode('c');
var d = new TreeNode('d');
var e = new TreeNode('e');
var f = new TreeNode('f');
var g = new TreeNode('g');

e.left = g;
b.left =d;
b.right =e;
c.right = f;
a.left = b;
a.right =c;

console.log(TreeDepth(a));