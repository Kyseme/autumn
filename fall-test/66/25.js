/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
    if(root==null){
        return;
    }
    var path = [];
    var result =[];
    var currentSum = 0;
    findPath(root,expectNumber,path,currentSum,result);
    console.log(result)
    return result;
}
function findPath(root,expectNumber,path,currentSum,result){
    currentSum+=root.val;
    path.push(root.val);
    //如果是叶节点，且路径上节点值和等于输入值
    var isLeaf = root.left==null && root.right==null;
    if(currentSum===expectNumber && isLeaf){
        console.log(path);
        result.push(path.slice(0))
        // console.log('path is '+path.toString());
    }
    //如果不是叶子节点，遍历子节点
    if(root.left!=null){
        findPath(root.left,expectNumber,path,currentSum,result);
    }
    if(root.right!=null){
        findPath(root.right,expectNumber,path,currentSum,result);
    }
    //在返回父节点前，删除当前节点
    path.pop();
}

var s1 = new TreeNode(10);
var s2 = new TreeNode(5);
var s3 = new TreeNode(12);
var s4 = new TreeNode(4);
var s5 = new TreeNode(4);
s5.val = 7;
s5.right = null;
s5.left = null;
s4.val = 4;
s4.right = null;
s4.left = null;
s3.val = 5;
s3.left = s4;
s3.right = s5;
s2.val = 12;
s2.left = null;
s2.right = null;
s1.left = s3;
s1.right = s2;
console.log(s1);

// FindPath(s1,22);
console.log(FindPath(s1,22));