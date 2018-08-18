/**二叉搜索树与双向链表
 * 输入一棵二叉搜索树，
 * 将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。  中序遍历
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * 
 * TreeNode *p = null;
 * &p;
 */
function Convert(pRootOfTree)
{
   var pLastNodeInList = new TreeNode(null);
   convertNode(pRootOfTree,pLastNodeInList);
   //pLastNodeInList指向双向链表的尾节点
   var pHeadofList = pLastNodeInList;
   while(pHeadofList!=null && pHeadofList.left!=null){
       pHeadofList = pHeadofList.left;
   }
   return pHeadofList;
}

function convertNode(pNode,pLastNodeInList){
    if(pNode==null){
        return;
    }
    var pCurrent = pNode;
    if(pCurrent.left!=null){
        convertNode(pCurrent.left,pLastNodeInList);
    }
    pCurrent.left = pLastNodeInList;
    if(pLastNodeInList!=null){
        pLastNodeInList.right = pCurrent;
    }
    pLastNodeInList = pCurrent;
    if(pCurrent.right!=null){
        convertNode(pCurrent.right,pLastNodeInList);
    }
}

//定义二叉搜索树 
/**
 *              10
 *      6               14
 *    4   8          12    16
 */

var root = new TreeNode(10);
var s1 = new TreeNode(6);
var s2 = new TreeNode(14);

var s3 = new TreeNode(4);
var s4 = new TreeNode(8);
var s5 = new TreeNode(12);
var s6 = new TreeNode(16);
s1.left = s3;
s1.right = s4;
s2.left = s5;
s2.right = s6;
root.left = s1;
root.right = s2;

console.log(Convert(root));
