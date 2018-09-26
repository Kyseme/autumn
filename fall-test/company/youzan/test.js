//广度遍历
function Tree(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


function breadSearch(root){
    if(root == null){
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
    if(root == null) return 0;
    if(root.left!=null){
        left = depthSearch(root.left);
    }
    if(root.right!=null){
        right = depthSearch(root.right);
    }
    return Math.max(left+1,right+1);
}
function ListNode(x) {
    this.val = x;
    this.next = null;
}
function ReverseList(head) {
    if(head==null)
        return null;
    let newHead = null;
    let pNode = head;
    let pPrev = null;
    while(pNode!=null){
        let pNext = pNode.next;
        if(pNext==null)
            newHead = pNode;
        pNode.next = pPrev;
        pPrev = pNode;
        pNode = pNext;
    }
    return newHead;
}

var obj = {
    name:'hello',
    child:{
        name:'kity'
    }
};
console.log(deepCopy(obj));
function deepCopy(obj){
    if(obj == null) return obj;
    if(typeof obj !='object'){
        return obj;
    }
    var target =Array.isArray(obj)?[]:{};
    for(let key in obj){
        let name = obj[key];
        if(typeof name == 'object'){
            target[key] = deepCopy(name);
        }else{
             target[key] = name;
        }
    }
    return target;
}

