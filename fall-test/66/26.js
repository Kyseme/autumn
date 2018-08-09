/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */

 function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    clonedNodes(pHead);
    connectRandomNodes(pHead);
    var res =  reconnectNodes(pHead);
    return res;
}
//复制原始链表的任意节点N并创建新节点N',将N'连接到N后面
function clonedNodes(pHead){
    var pNode = pHead;
    while(pNode!=null){
        var pCloned = new RandomListNode(pNode.label);
        pCloned.next = pNode.next;
        pCloned.random = null;
        pNode.next = pCloned;
        pNode = pCloned.next;
    }
}
//复制Node的random指针
function connectRandomNodes(pHead){
    var pNode = pHead;
    while(pNode!=null){
        var pCloned = pNode.next;
        if(pNode.random!=null){
            pCloned.random = pNode.random.next;
        }
        pNode = pCloned.next;
    }
}
//将长列表拆分成两个列表
function reconnectNodes(pHead){
    var pNode = pHead;
    var pClonedHead = null;
    var pClonedNode = null;
    if(pNode!=null){
        pClonedHead = pClonedNode = pNode.next;
        pNode.next = pClonedNode.next;
        pNode = pNode.next;
    }
    while(pNode!=null){
        pClonedNode.next = pNode.next;
        pClonedNode = pClonedNode.next;
        pNode.next = pClonedNode.next;
        pNode = pNode.next;
    }
    return pClonedHead;
}

var a = new RandomListNode('A');
var b = new RandomListNode('B');
var c = new RandomListNode('C');
var d = new RandomListNode('D');
var e = new RandomListNode('E');
a.next =b;
a.random = c;
b.next = c;
b.random = e;
c.next = d;
c.random = null;
d.next =e;
d.random = b;
e.next = null;
e.random = null;
console.log(a);

console.log(Clone(a));