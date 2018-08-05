patch(vnode,newVnode);




patch(container,vnode);
var oo = {
    tag:'ul',
    attrs:{

    },
    children:[]
};
// ReactDOM.render(
//     element,
//     container,
//     [callback]
//   )
function createElment(){

}

function updateChildren(vnode,newVnode){
    var children = vnode.children || [];
    var newChildren = newVnode.children || [];
    children.forEach(function(chhildVnode,index){
        var newChildVnode = newChildren[index];
    })
}