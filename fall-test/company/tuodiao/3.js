/*

小a和小b玩一个游戏，有n张卡牌，每张上面有两个正整数x,y.取一张牌时，
个人积分增加x，团队积分增加y.求小a,小b各取若干张牌，使得他们的个人积分相等，
且团队积分最大。

>表示小a的积分和小b的积分相等时，团队积分的最大值

>4
>3 1
>2 2
>1 4
>1 4

>10
*/

var n = 4;
var arr = [[3,1],[2,2],[1,4],[1,4]];

// quicksort2(0,3);
arr = arr.sort(function(a,b){
    return b[1]-a[1];
})
console.log(arr);

function findMaxNum(n,arr){
    if(arr==null || arr.length<=0){
        return;
    }
    var a = 0;
    var b = 0;
    var total = 0;
    // var max = 0;
    let x = [3,2,1,1];
    let y = [1,2,4,4];
    let maxGrade = [];
    dfs(0,0,x,y,maxGrade,0,0);
    console.log(maxGrade[0]);
}

function dfs(a,b,x,y,maxGrade,index,curMax){
    if(index==x.length){
        if(a==b&&maxGrade[0]<curMax){
            maxGrade[0] = curMax;
        }
        return;
    }
    dfs(a+x[index],b,x,y,maxGrade,index+1,curMax+y[index]);    //a选第index张牌
    dfs(a,b+x[index],x,y,maxGrade,index+1,curMax+y[index]);    //b选第index张牌
    dfs(a,b,x,y,maxGrade,index+1,curMax);                                  //a和b都不选第index张牌
}

