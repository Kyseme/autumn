/**
 * 两个链表的第一个公共节点  通过栈  从尾部开始遍历
 * 
 *   a-->b-->c
 *             \
 *               f-->g
 *             /  
 *       d-->e
 */

 function ListNode(x){
    this.val = x;
    this.next = null;
}


function FindFirstCommonNode(pHead1, pHead2)
{
    //获取两个链表的长度
    let len1 = getListLen(pHead1);
    let len2 = getListLen(pHead2);
    let lenDiff = len1-len2;
    console.log(len1,len2);
    let pListLong = pHead1;
    let pListShort = pHead2;
    if(len1<len2){
        pListLong = pHead2;
        pListShort = pHead1;
        lenDiff = len2-len1;
    }
    //先在长链表中走几步
    for(let i=0;i<lenDiff;i++){
        pListLong = pListLong.next;
    }

    while(pListLong!=null && pListShort!=null && pListLong!=pListShort){
        pListLong = pListLong.next;
        pListShort = pListShort.next;
    }
    let pNodeCommon = pListLong;
    return pNodeCommon;
}

function getListLen(pHead){
    let len = 0;
    console.log(pHead)
    let node = pHead;
    while(node!=null){
        ++len;
        node = node.next;
    }
    console.log(len)
    return len;
}
var a = new ListNode('a');
var b = new ListNode('b');
var c = new ListNode('c');
var d = new ListNode('d');
var e = new ListNode('e');
var f = new ListNode('f');
var g = new ListNode('g');
f.next = g;
e.next = f;
c.next = f;
d.next = e;
b.next = c;
a.next = b;
// console.log(a);
// console.log(d);
console.log(FindFirstCommonNode(a,d));

