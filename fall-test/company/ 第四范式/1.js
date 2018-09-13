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

console.log(getMutiply('16','24'));
function getMutiply(num1,num2){
    var len1=num1.length,  len2=num2.length;
    var num= [];
    num.length = len1+len2;
    var n = num.length;
    num.fill(0);

    for(let i=len1-1;i>=0;i--){
        for(let j=len2-1;j>=0;j--){
            num[i+j+1]+=(+num1[i])*(+num2[j]);
        }
    }
    var carry=0;
    for(let i=n-1;i>=0;i--){
        num[i]+=carry;
        carry= Math.floor(num[i]/10);
        num[i]=num[i]%10;
    }
    // console.log(num);
    num = num.join('').replace(/^0+/g,'');
    // console.log(num);
    // for(let i=0;i<n;i++){
    //     if(!flag && num[i]==0)
    //         continue;
    //     else{
    //         result+=num[i];
    //         flag=true;
    //     }
    // }

    if(num == '')  return "0";
    return num;
}