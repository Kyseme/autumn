//模拟出栈和进栈方式
var seque = [1,2,3,4,5];
var out = [4,5,3,1,2];

isVaild(seque,out);

function isVaild(seque,out){
    var sc = [];
    let j = 0;
    let n = seque.length;
    for(let i=0;i<n;i++){
        sc.unshift(seque[i]);
        while(sc.length>0 && sc[0]==out[j]){
            sc.shift();
            ++j;
        }
    }
    console.log((sc.length>0)?false:true);
    return (sc.length>0)?false:true;
}

