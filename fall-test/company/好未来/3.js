
var arr3 = [0,1,2,3,4,5,6,7,8,9];
// var str = arr3.join('');
var list = [];
var num = [0,1,1,1,1,1,1,1,1,0];
getSolution(arr3,0);
arr = list.sort();
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].slice(10).toString());
}

function getSolution(str,index){
    if(index == 10){
        list.push(str);
        return;
    }
    if(num[index] ==1){
        getSolution(str.concat(str[index]),index+1);
    }else{
        getSolution(str.concat(str[index]),index+1);
        getSolution(str,index+1);
    }
}