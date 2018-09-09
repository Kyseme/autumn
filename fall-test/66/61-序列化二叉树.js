/**
 * 序列化二叉树
 * 
 * 请实现两个函数，分别用来序列化和反序列化二叉树
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

//console.log(Serialize(a));
// function Serialize(pRoot)
// {
//     if(pRoot == null) return '';
//     var str = '';
//     str = SerializeTree(pRoot,str);
//     return str.substring(0,str.length-1);
// }

// function SerializeTree(root,str){
//     if(root==null){
//         str+='#,';
//         return str;
//     }
//     str+=root.val+',';
//     str = SerializeTree(root.left,str);
//     str = SerializeTree(root.right,str);
//     return str;
// }

// var ss ='a,b,d,#,#,e,g,#,#,#,c,#,f,#,#';
// console.log(Deserialize(ss));
// function Deserialize(s)
// {
//    if(s==null || s.length<=0){
//        return null;
//    }
//    var arr = s.split(',');
// //    console.log(arr);
//    return DeserializeTree(arr);
// }
// var index = -1;
// function DeserializeTree(arr){
//     ++index;
//     console.log(index);
//     if(index==arr.length){
//         return;
//     }
//     if(arr[index]!='#'){
//         let root = new TreeNode(0);
//         root.val = arr[index];
//         root.left = null;
//         root.right = null;
//         // root.left = DeserializeTree(arr);
//         // root.right = DeserializeTree(arr);
//         return root;
//     }
//     return null;
// }

var arr = [];
function Serialize(pRoot)
{
    if(pRoot==null){
        arr.push('#');
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
        
}
function Deserialize(s)
{
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}