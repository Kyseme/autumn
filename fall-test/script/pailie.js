
function allOrder(arr, start, len) {
    if (start === len - 1)//前缀是最后一个位置,此时打印排列数.
    {
        for (let i = 0; i < len; i++) {
            console.log(arr[i]);
          
        }
       console.log('****');
    }
    else {
        for (let i = start; i < len; i++) {
            //交换前缀,使之产生下一个前缀.
            swap(arr[start], arr[i]);
            allOrder(arr, start + 1, len);
            //将前缀换回来,继续做上一个的前缀排列.
            swap(arr[start], arr[i]);
        }
    }

}
function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
}

var arr = [1,2,3,4,5];
allOrder(arr,0,5);

/* var arr=["a", "b", "c", "d"];
var d= arr.length;
while (d--)
{
    for (var i = 0, len= arr.length - 1; i < len; ++i)
    {
        var f1= arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = f1;
        trace(arr);
    }
} */

/* for(let i =0;i<=5;i++){
    for(let j = i;j<=5;j++){
        console.log('*');
    }
    console.log('\n');
} */

