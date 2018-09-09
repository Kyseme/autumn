/**把二叉树打印成多行
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

Print(a);
function Print(pRoot)
{
    if(pRoot==null){
        return;
    }
    var result = [];
    result.push(pRoot);
    var count = 0;
    var toPrint = 1;
    var temp = [];
    var res = [];
    while(result.length>0){
        pRoot = result.shift();
        temp.push(pRoot.val);
        if(pRoot.left!=null) {
            result.push(pRoot.left);
            ++count;
        }
        if(pRoot.right!=null){
            result.push(pRoot.right);
            ++count;
        }
        --toPrint;
        if(toPrint==0){
            res.push(temp);
            toPrint = count;
            count = 0;
            temp = [];
        }
    }
    return res;
}




