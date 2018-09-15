var str = '377333';
console.log(getLuckNum2(str));
function getLuckNum2(str){
    if(str.length!=6 || str==null) return null;
    var arr = str.split('').map(function(t){
        return parseInt(t);
    });  
    var left = arr.slice(0,3).sort(function(a,b){
        return b-a;
    });
    var right = arr.slice(3).sort(function(a,b){
        return b-a;
    });
    var leftSum = 0;
    var rightSum = 0;
    for(let i = 0;i<3;i++){
        leftSum +=left[i];
        rightSum+=right[i];
    }
    if(leftSum === rightSum){
        return 0;
    }
    if(Math.abs(leftSum-rightSum)<=9){
        if(leftSum > rightSum && (leftSum-rightSum+right[2])<=9){
            return 1;
        }else if(leftSum < rightSum &&(rightSum-leftSum + left[2])){
            return 1;
        }
        return 2;
    }else if(Math.abs(leftSum-rightSum)<=18){
        return 2;
    }else{
        return 3;
    }
}

function getLuckNum(str){
    if(str.length!=6 || str==null) return -1;
    var leftSum = 0;
    var rightSum = 0;
    for(let i=0;i<3;i++){
        leftSum +=parseInt(str[i]);
    } 
    for(let i=3;i<6;i++){
        rightSum+=parseInt(str[i]);
    }
    if(leftSum === rightSum){
        return 0;
    }
    if(Math.abs(leftSum-rightSum)<=9){
        return 1;
    }else if(Math.abs(leftSum-right)<=18){
        return 2;
    }else{
        return 3;
    }
}

