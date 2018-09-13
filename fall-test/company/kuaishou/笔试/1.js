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
console.log(getResult(38,13));
function getResult(a,b){
    if(b  == 0) return;
    var res = a/b;
    var regex = /\./g;
    if(regex.test(res.toString())){
        let name = isLoop(a,b);
        if(name == 'w'){
            let t = res.toString().split('.');
            let numInt = t[0];
            let fNum;
            if(t[1][0] == t[1][1]){
                fNum = '('+ t[1].slice(0,1)+ ')';
            }else{
                fNum = t[1].slice(0,1) + '('+t[1].slice(1,2) + ')';
            }
            res = numInt + '.'+fNum;
            return res;
        }
        if(name == 'x'){
            let t = res.toString().split('.');
            let numInt = t[0];
            let fNum = '('+t[1].slice(0,6)+')';
            res = numInt + '.'+fNum;
            return res;
        }
    }
    return res+'';
}

//求最大公约数字
function getMaxNum(a,b){
    var c = 0;
    while (true) {
        c = a % b;
        a = b;
        b = c;
        if (b == 0) {
            return a;
        }
    }
}
function isLoop(a, b) {
    var temp = getMaxNum(a, b);
    b = b / temp;
    while (b % 2 == 0) {
        b = Math.floor(b / 2);
    }
    while (b % 5 == 0) {
        b = Math.floor(b / 5);
    }
    if (b == 1 || b == -1) {
        return false;
    } else if(b % 3 == 0){
        return 'w';
    }else{
        return 'x';
    }
}


