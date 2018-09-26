// var num = '12rem';
// var ss = num.replace(/(\d+)rem/,function(n1,n2){
//     console.log(n1);
//     console.log(n2);
// });
// var url = 'http://www.baidu.com?name=123&pwd=123';
// var regex = /\?(.*)/;
// var str = url.match(regex)[1];
function getParams(str){
    var arr = str.split('&');
    var param = {};
    for(let i=0;i<arr.length;i++){
        let temp = arr[i].split('=');
        param[temp[0]] = temp[1];
    }
    console.log(param);
}
// getParams(str);


//数组扁平化
var arr = [1,[2,[3,[4]]]];
// console.log(flatten(arr));
function flatten(arr){
    return arr.reduce(function(prev,next){
        return prev.concat(Array.isArray(next)?flatten(next):next);
    },[]);
}
flat(arr);
function flat(arr){
    var temp = [];
    for(let i=0;i<arr.length;i++){
        if(Object.prototype.toString.call(arr[i])=='[object Array]'){
            temp.concat(arr[i]);
        }else{
            temp.push(arr[i]);
        }
    }
    console.log(arr);
}
