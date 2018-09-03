/**链表中环的入口节点
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 *             -----------------
 *            |                 |
 * 1--->2---->3---->4---->5---->6
 * 
 * 1.找到环节点的长度，一快一慢两个指针找是否存在环
 * 2.环节点长度为4，两个指针p1,p2,p1向前移动4步，指向5，之后p1,p2以相同的速度移动，直到相遇，则为环节点的入口
 */


 function ListNode(x){
    this.val = x;
    this.next = null;
}
var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
var f = new ListNode(6);
e.next = f;
d.next = e;
c.next = d;
b.next = c;
a.next = b;
f.next = c;
EntryNodeOfLoop(a);
function EntryNodeOfLoop(pHead){
    var meetNode = findMeetNode(pHead);
    if(meetNode==null){
        return null;
    }
    var pNode1 = meetNode;
    var pNode2 = pHead;
    while(pNode1!=null && pNode2!=null){
        if(pNode1==pNode2){
            return pNode1;
        }
        pNode1 = pNode1.next;
        pNode2 = pNode2.next;
    }
    // //得到环中节点的数目
    // var nodesInLoop = 1;
    // var pNode = meetNode;
    // while(pNode.next!=meetNode){
    //     pNode = pNode.next;
    //     ++nodesInLoop;
    // }

    // //先移动pNode，次数为环中节点的数目
    // pNode = pHead;
    // for(let i=0;i<nodesInLoop;i++){
    //     pNode = pNode.next;
    // }
    // //再移动pNode2
    // var pNode2 = pHead;
    // while(pNode!=pNode2){
    //     pNode = pNode.next;
    //     pNode2 = pNode2.next;
    // }
    // return pNode;
}
function findMeetNode(pHead){
    if(pHead==null){
        return null;
    }
    var pSlow = pHead.next;
    if(pSlow==null){
        return null;
    }
    var pFast = pSlow.next;
    while(pFast!=null && pSlow!=null){
        if(pFast == pSlow){
            return pFast;
        }
        pSlow = pSlow.next;
        pFast = pFast.next;
        if(pFast!=null){
            pFast = pFast.next;
        }
    }
    return null;
}