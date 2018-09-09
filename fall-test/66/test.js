
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Deserialize(s)
{
   if(s==null || s.length<=0){
       return null;
   }
   var arr = s.split(',');
   return DeserializeTree(arr);
}
var index = -1;
function DeserializeTree(arr){
    ++index;
    if(index==arr.length){
        return;
    }
    if(arr[index]!='#'){
        let root = new TreeNode(0);
        root.val = arr[index];
        root.left = DeserializeTree(arr);
        root.right = DeserializeTree(arr);
        return root;
    }
    return null;
}
var ss ='a,b,d,#,#,e,g,#,#,#,c,#,f,#,#';
console.log(Deserialize(ss));