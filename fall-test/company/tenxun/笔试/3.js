//能源石

var s = 'xyabababcba';
var p = 'ab';
// s = 'aaa';
// p = 'aa';
getPower(s,p);
function getPower(s,p){
    let res = 0;
    let t = p;
    if(isPCommon(p) && s.indexOf(p)!=-1){
        let index = s.indexOf(p);
        for(let i = index;i<s.length;i++){
            if(s[i] == p[0]) ++res;
        }
        res = Math.pow(res,2);
    }else{
        while(s.indexOf(t)!=-1){  
            res = Math.max(res,Math.floor((Math.pow(t.length,2))));
            t = t+p;
        }
    }
    console.log(res);
}

function getPower2(s,p){
    let res = 0;
    let t = p;
    while(s.indexOf(t)!=-1){  
        res = Math.max(res,Math.floor((Math.pow(t.length,2))));
        t = t+p;
    }
    console.log(res);
}

function isPCommon(p){
    let t  = p[0];
    for(let i =1 ;i<p.length;i++){
        if(p[0] != p[i]){
            return false;
        }
    }
    return true;
}


