// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }

// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);

var str = 'xxxxyyyyyyzbbb';
str = 'aac';
gizStr(str);
function gizStr(str){
    if(str == null || str.length <= 0 ) return str;
    var t = 0;
    var s = '';
    var i = 0;
    while(i<str.length){
        if(str[i]===str[i+1]){
            i++;
            t++;
            while(str[i]==str[i+1]){
                i++;
                t++;
            }
        }else{
            t = t===0 ? '' :t;
            s = s + t+str[i];
            i++;
            t = 0;
        }
    }
    console.log(s);
}

