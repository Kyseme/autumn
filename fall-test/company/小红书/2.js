
var str = '3 5 4 2 6 7 1'.split(' ');
var str2 = '2 5 3 6 4 7 1'.split(' ');// 中序遍历 左根右
// console.log(str,str2);


//https://paste.ubuntu.com/10616131/


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
getTree(str,str2);
function getTree(str,str2){
    var root = new Node(0);
    var flag = [];
    // for(let i=0;i;i++){
    //     root[i] = new Node();
    // }
    buildTree(s1,s2,root,flag);
    // a=0;
    // yezijiedian(0,root);
    // System.out.println();
    // a=0;
    // pro(0,root);
    // System.out.println();
    // a=0;
    // post(0,root);
}

function buildTree(s1,s2,root,flag){
    let index=0;
    for(let i=0;index<s1.length;){
        if(root[index].v==-1){
            root[index].v=parseInt(s1[i++]);
        }
        let c=0;
        while(root[index].v!=parseInt(s2[c]))
            c++;
        flag[c]=false;
        if(c>0&&flag[c-1]!=true){
            root[index].l=i;
            root[i].v=parseInt(s1[i++]);
            c=0;
            while(root[index].v!=Integer.parseInt(s2[c]))
                c++;
            flag[c]=true;
        }
        if(c<s1.length-1&&flag[c+1]!=true){
            root[index].r=i;
            root[i].v=Integer.parseInt(s1[i++]);
            c=0;
            while(root[index].v!=parseInt(s2[c]))
                c++;
            flag[c]=true;
        }
        index++;
    }
}

