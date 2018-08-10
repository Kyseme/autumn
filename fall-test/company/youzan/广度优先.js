// 用代码实现下面的二叉树，并写一个函数打印出广度优先遍历结果
//                   a
//                 /   \  
//                b     c
//               / \     \
//              d   e     f


function breadthSearch(root) {
    if(root==null){
        return;
    }
    let result = [];
   
    result.push(root);
    let head = result[0];

    while(result.length>0){
        console.log(head.val);
        if(head.left!=null){
            result.push(head.left);
        }
        if(head.right!=null){
            result.push(head.right);
        }
        result.shift();
        if(result.length>0){
            head = result[0];
        }
    }
}


function depthSearch(root){
    if(root==null){
        return;
    }
    let result = [];
    result.push(root);
    let head;
    while(result.length>0){
        // head = result.slice(0,1)[0];
        head = result[0];
        result.shift();
        console.log(head.val);
        if(head.right!=null){
            result.unshift(head.right)
        }
        if(head.left!=null){
            result.unshift(head.left);
        }
    }
}
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var a = new TreeNode('a');
var b = new TreeNode('b');
var c = new TreeNode('c');

var d = new TreeNode('d');
var e = new TreeNode('e');
var f = new TreeNode('f');

b.left = d;
b.right = e;
c.right = f;
a.left = b;
a.right = c;
// walkTree(a);
depthSearch(a);

