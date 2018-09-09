
 var s = '10001';
 var res = [0];
 backtracking(s,res,0,"",1);
 console.log(res[0]);

function backtracking(s,res,pos,temp,k){
    if(k==4) {
        if(pos==s.length||(s.charAt(pos)=='0'&&pos!=s.length-1)||s.substring(pos).length>=4||(s.substring(pos)>255)) return;
        temp+=s.substring(pos);
        res[0]++;
        return;
    }
    for(let i=pos;i<s.length;i++)
    {
        var t=s.substring(pos,i+1);
        if(t.length>=4||t>255||(s.charAt(pos)=='0'&&i!=pos)) break;
        backtracking(s,res,i+1,temp+t+".",k+1);
    }
}