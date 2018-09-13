

var n = 6;
var arr = [[1,2],[2,3],[2,4],[5,4],[6,4]];
// n =4;
// arr = [[1,2],[2,3],[2,4]];


function List(x) {
    this.val = x;
    this.next = null;
}

function findMaxFee2(n,arr){
    if(arr == null || arr.length <=0) return 0;
    if(n<4) return 0;
    arr = arr.map(function(item){
        if(item[0]>item[1]){
            let t = item[0];
            item[0] = item[1];
            item[1] = t;
        }
        return item;
    });
    arr.sort(function(a,b){
        return a[0] - b[0];
    });
    console.log(arr);
    let i =0;
    let t = null;
    while(i<arr.length-1){
        var list = new List(arr[i][0]);
        if(arr[i][1] == arr[i+1][0]){
            t = new List(arr[i][1]);
            list.next = t;
            t = null;
            t = new List(arr[i+1][1]);
            list.next = t;
        }else if(arr[i][0] == arr[i+1][0]){
            t = new List(arr[i+1][1]);

        }
    }
  

}



arr = [[1,2],[2,3],[2,4],[2,5],[2,6]];

console.log(findMaxFee(n,arr));
// console.log(findMaxFee(n,arr));
function findMaxFee(n,arr){
    if(arr == null || arr.length <=0) return 0;
    if(n<4) return 0;
    var res = 1;
    var str = arr.join(',').split(',');
    var obj = {};
    for(let i =0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = 1;
        }
    }
    for(let key in obj){
        if(obj[key]== n-1) return 0;
    }
    if(n%2){
        let num1 = (n+1)/2;
        res = num1*(num1-1);
    }else{
        res = (n/2-1)* (n/2-1);
    }
    return res;
}