// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
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
console.log(getStrLength('abcabcbbb'));
function getStrLength(str){
    if(str == null || str.length <=0) return 0;
    // var obj = {};
    // for(let i=0;i<str.length;i++){
    //     if(obj[str[i]]){
    //         ++obj[str[i]];
    //     }else{
    //         obj[str[i]] = 1;
    //     }
    // }
    var arr = [];
    for(let i=0;i<str.length;i++){
        if(arr.indexOf(str.charAt(i))==-1){
            arr.push(str.charAt(i));
        }
    }
    // var result = Object.keys(obj).length;
    // var result = 0;
    // for(let key in obj){
    //     ++result;
    // }
    return arr.length;
}

function getStrLength(str){
    var map = {};
    var left = 0;
    return str.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}