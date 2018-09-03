/**删除链表中重复的节点
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
 * 重复的结点不保留，返回链表头指针。 
 * 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}
var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(3);
var e = new ListNode(4);
var f = new ListNode(4);
var g = new ListNode(5);
f.next = g;
e.next = f;
d.next = e;
c.next = d;
b.next = c;
a.next = b;
console.log(a);
deleteDuplication(a);
function deleteDuplication(pHead) {
    if(pHead==null){
        return null;
    }
    if (pHead!=null && pHead.next==null) return pHead;
    var p = pHead;
    var node = new ListNode(0);
    var pre = node;
    node.next = pHead;
    var flag = false;
    while(p!=null && p.next!=null){
        var q = p.next;
       if(q.val == p.val){
           while(q!=null && q.val == p.val){
               q= q.next;
           }
           pre.next = q;
           p = q;
       }else{
           if(!flag){
               node.next = p;
               flag = true;
           }
           pre = p;
           p = q;
       }
    }
    return node.next;
}