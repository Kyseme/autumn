/**
 * 二叉搜索树的第k个节点
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。
 * 例如， （5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var five = new TreeNode(5);
var three = new TreeNode(3);
var seven = new TreeNode(7);
var two = new TreeNode(2);
var four = new TreeNode(4);
var six = new TreeNode(6);
var eight = new TreeNode(8);

seven.left = six;
seven.right = eight;
three.left = two;
three.right = four;
five.left = three;
five.right = seven;
console.log(KthNode(five,2));
var num = 0;
//中序遍历
var index = 1;
function KthNode(pRoot, k)
{
    if (pRoot != null) {
        var ret = KthNode(pRoot.left, k);
        if(ret) return ret;
        if(++index == k) return pRoot;
        ret = KthNode(pRoot.right,k);
        if(ret) return ret;
    }
    return null;
}
function findKthNode(root){
    var t = null;
    if (t == null && root.left != null) t = findKthNode(root.left);
    if (t == null && num == 1) {
        t = root;
    } else {
        --num;
    }
    if (t == null && root.right != null) t = findKthNode(root.right);
    return t;
}