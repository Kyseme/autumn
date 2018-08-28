/**
 * 
 * // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}


// 本题为考试多行输入输出规范示例，无需提交，不计分。
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
var n = 14;
var l = 60;
var h = 80;
var ans = [[10000001,64,90],[10000002,90,60],[10000011,85,80],[10000003,85,80],[10000004,80,85],[10000005,82,77],[10000006,83,76],[10000007,90,78],[10000008,75,79],[10000009,59,90],[10000010,88,45],[10000012,80,100],[10000013,90,99],[10000014,66,60]];

function order(n,l,h,arr){
    if(n<=0){
        return;
    }
    var results = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i][1]<l || arr[i][2]<l ){
            arr.splice(i,1);
        }
    }
    results.push(arr.length);
    arr = arr.sort(function(a,b){
        return  b[1]+b[2] - a[1]- a[2] ;
    });
    results.concat(arr);
    return results;
}
// order(n,l,h,ans);
/**
 * 
 *[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */
function generate(n){
    if(n===1) return['()'];
    let res = new Set();
    let p = generate(n-1);
    for(let i=0;i<p.length;i++){
        res.add('()'+p[i]);
        for(let j=0;j<p[i].length;j++){
            if(p[i][j]==='('){
                res.add(p[i].slice(0,j+1)+'()'+p[i].slice(j+1));
            }
        }
    }
    return [...res];
}
console.log(generate(3));
