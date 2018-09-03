/**按照之字形顺序打印二叉树
 * 请实现一个函数按照之字形打印二叉树，
 * 即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，
 * 第三行按照从左到右的顺序打印，
 * 其他行以此类推。
 * 
 * * 
 *            8
 *        ／        \
 *        6         6
 *      /   \      /  \
 *     5     7    7    5
 * 
 *  8-6-6-5-7-7-5
 */
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
// console.log(eight);
Print(eight);
function Print(pRoot)
{
    if(pRoot ==null){
        return;
    }
    var layer = 1;
    var s1 = [];    //s1存奇数层节点
    var s2 = [];    //s2存偶数层节点
    var list = [];
    s1.push(pRoot);
    while(s1.length>0 || s2.length>0){
        if(layer%2!=0){
            let temp = [];
            while(s1.length>0){
                let node = s1.shift();
                if(node!=null){
                    temp.push(node.val);
                    s2.push(node.left);
                    s2.push(node.right);
                }
            }
            if(temp.length>0){
                list = list.concat(temp);
                layer++;
            }

        
        }else{
            let temp = [];
            while(s2.length>0){
                let node = s2.shift();
                if(node!=null){
                    temp.push(node.val);
                    s1.push(node.left);
                    s1.push(node.right);
                }
            }
            if(temp.length>0){
                list = list.concat(temp);
                layer++;
            }
        }
    }
    return list;
}
