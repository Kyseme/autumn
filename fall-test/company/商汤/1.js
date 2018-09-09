/**
 * while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}


var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans);
 */

var n = 2;
var m = 2;
var arr = [ [0.5,0.5],[0.5,0.5],[0.5,0.5],[0.5,0.5]];
function calcExpection(n,m,arr){
    if(n<=0 || m<=0 || arr ==null || arr.length<=0) return 0;
    let total = n*m;
    let result = 0;
    for(let i=1;i<=n*m;i++){
        result = result + i*getPexi(n,m,arr,i);
    }
}

function getPexi(n,m,arr,i){
    

    return 1;
};
