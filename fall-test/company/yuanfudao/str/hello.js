const obj = {
        id: 1,
        arr: [1,2,3],
        innerObj: { id: 1, value: 2 },
        objArr: [{ id: 2, value: 4 }, { id: 3, value: 6 }]
    }
    
    // getValue(obj, ‘id’)  // 1
    // getValue(obj, ‘arr[0]’)  // 1
    // getValue(obj, ‘objArr[1].id’)  // 3
    
    function getValue(obj, path) {
        var path =  path.replace('[','.').replace(']','');
        console.log(path);
    
        if (path.indexOf('.')!=-1) {
            let arr = path.split('.');
            let myobj = obj;
            for (let i = 0; i < arr.length; i++) {
                if (myobj[arr[i]]) {
                    myobj = myobj[arr[i]];
                    if (i == (arr.length - 1)) {
                        return myobj;
                    }
                } else {
                    return undefined;
                }
            }
        } else {
            return obj[path];
        }
    }
    console.log(getValue(obj,'objArr[1].id'));