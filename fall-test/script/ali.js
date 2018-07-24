// 假设树的结构如下
    // const tree = [
    //     {
    //         id: 1,
    //         name: '张三',
    //         children: [
    //             {
    //                 id: 2,
    //                 name: '李四',
    //                 children: [
    //                     {
    //                         id: 5,
    //                         name: '张五'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 6,
    //         name: '玛丽'
    //     }
    // ]
        
    // 测试用例：
    
    // 1. 生成一颗新树，将所有节点的id，加1
    // console.log(treeMap(tree, node => {
    //     let newNode = { ...node }
    //     newNode.id = node.id + 1
    //     return newNode
    // }))
    // 打印的新树，应该与tree的结构一致，只是每个id自增1，老的tree，应该没有任何改动
    
    // 2. 打印每个节点的id
    // treeMap(tree, node => {
    //     console.log(node.id)
    //     return node
    // });
    // 应打印顺序应该是： 5，2，1，6

    const tree = [
        {
            id: 1,
            name: '张三',
            children: [
                {
                    id: 2,
                    name: '李四',
                    children: [
                        {
                            id: 5,
                            name: '张五'
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            name: '玛丽'
        }
    ];
    function newTree(tree){
        let newNode = tree.map((item,index)=>{
            if(item.children){
                item.id = item.id+1;
                newTree(item.children);
                return item;
            }else{
                item.id = item.id+1;
                return item;
            }
        })
        return newNode;
    }

    var arrs = [];
    function pritTreeNode(tree){
        tree.forEach((item)=>{
            if(item.children){
                arrs.unshift(item.id);
                pritTreeNode(item.children)
            }else{
                arrs.unshift(item.id);
            }
        });
        return arrs;
    }
    // newTree(tree);
    // var ss =pritTreeNode(tree);
    // console.log(ss);

    
    
