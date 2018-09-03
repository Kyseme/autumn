/**
 * 使用setTimeout实现setInterval功能
 */

function myInterval(){
   setTimeout(function(){
        myInterval();
        console.log(2);
   },100)
}
// myInterval();

/**
 * 使用递归和非递归两种方法统计一棵二叉树的深度
 * 
 *  * 
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

    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);

    return Math.max(left+1,right+1);

}

function TreeDepthNum(pRoot){
    if(pRoot==null){
        return 0;
    }
    var results = [];
    results.push(pRoot);
    let cur;
    let last;
    let level = 0;
    let current = null;
    while(results.length>0){
        cur = 0;
        last = results.length;
        while(cur<last){
            current = results.pop();
            cur++;
            if(current.left!=null){
                results.unshift(current.left);
            }
            if(current.right!=null){
                results.unshift(current.right);
            }
        }
        level++;
    }
    return level;
}


//用队列存储   results将left和right都存储进去,然后给一个cur和last下标进行遍历
function TreeBread(pRoot){
    if(pRoot==null){
        return null;
    }
    let cur;
    let last;
    let results = [];
    let current = null;
    results.push(pRoot);
    while(results.length>0){
        cur = 0;
        last = results.length;
        while(cur<last){
            current = results.pop();
            cur++;
            console.log(current.val);
            if(current.left!=null){
                results.unshift(current.left);
            }
            if(current.right!=null){
                results.unshift(current.right);
            }
        }
    }
    return;
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

//  console.log(TreeDepthNum(a));
//  TreeBread(a);


//在一个无序数组中，寻找连续两个及两个以上的相同元素的个数
//例如：有数组[10, 22, 32, 4, 4, 5, 6, 9, 8, 8, 2]，返回结果为2

