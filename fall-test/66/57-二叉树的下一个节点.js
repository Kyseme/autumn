/**二叉树的下一个节点
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 * 
 * 左根右
 */

 function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}

var a = new TreeLinkNode('a');
var b = new TreeLinkNode('b');
var c = new TreeLinkNode('c');
var d = new TreeLinkNode('d');
b.left =d;
d.next = b;
a.left = b;
a.right = c;

GetNext(a);
function GetNext(pNode)
{
    if(pNode ==null){
        return null;
    }
    var pNext = null;
    if(pNode.left!=null){
        var pRight = pNode.right;
        while(pRight.left!=null){
            pRight = pRight.left;
        }
        pNext = pRight;
    }else if(pNode.next!=null){
        var pCurrent = pNode;
        var pParent = pNode.next;
        while(pParent!=null && pCurrent===pParent.right){
            pCurrent = pParent;
            pParent = pParent.next;
        }
        pNext = pParent;
    }
    console.log(pNext);
    return pNext;
}