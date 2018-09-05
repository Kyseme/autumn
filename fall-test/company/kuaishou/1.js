// 科学计数法，将 24315436 转换成 24,315,436
var num = 724315436;
change(num);
function change(num){
    var str = num.toString().split('.');
    num = str[0];
    var floatPart = str.length>1?'.'+str[1]:'';
    var result = '';
    while(num.length>3){
        result = ','+num.slice(-3)+result;
        num = num.slice(0,num.length-3);
    }
    // console.log(num);
    // console.log(result);
    if(num){
        result = num + result;
    }
    // console.log(result);
}
addCommas(num);
function addCommas(val){
    var aIntNum = val.toString().split('.');
    //整数部分
    var intPart = aIntNum[0];
    var floatPart = aIntNum.length>1?'.'+aIntNum[1]:"";

    var reg = /(\d+)(\d{3})/;
    if(intPart.length>=5){
        while(reg.test(intPart)){
            intPart = intPart.replace(reg,`$1,$2`);
        }
    }
    console.log(intPart);
    return intPart + floatPart;
}
var arr =[1,[2,[3,4,2],2],5,[6]];
function flatter(arr){
    var res = arr.join(',').split(',');
    res = res.map((ele)=>+ele);
    console.log(res);
}
flatter2(arr);
function flatter2(arr){
    var res = arr.toString().replace(/\[+/g,',').replace(/\]+/g,',');
    console.log(res);
}
// console.log(flattern(arr));
function flattern(arr){
    var array = [];
    arr.forEach((ele)=>{
        if(Array.isArray(ele)){
            array.push(...flattern(ele));
        }else{
            array.push(ele);
        }
    })
    return array;
}

//装饰者模式 
//给对象扩展属性和方法
var Plan = {
    fire:function(){
        console.log('发射普通的子弹');
    }
};

var missileDecorator = function(){
    console.log('发射导弹!');
}
var fire = Plan.fire;
Plan.fire = function(){
    fire();
    missileDecorator();
}
Plan.fire();
//返回指定数在“有序”数组中最后一次出现的位置 
//findLastIndex([1,2,3,3,3,4,5], 3), 返回 4
function findLastIndex(arr,num){
    if(arr==null || arr.length<=0){
        return -1;
    }
    for(let j=arr.length-1;j>=0;j--){
        if(arr[j]===num){
            return j;
        }
    }
    return -1;
}
var arr2 =[1,2,3,3,3,4,5];
// console.log(findLastIndex(arr2,3));
function findLastIndex(arr,num){
    var mid,left,right,pos =-1;
    mid = Math.floor(arr.length/2);
    left = 0;
    right = arr.length-1;
    if(arr[left]!=arr[right]){
        while(Math.abs(left - right)!= 1){
            if(arr[mid] === num){
                pos = mid;
                left = mid;
                mid = Math.floor((left + right)/2);
            }else if(arr[mid] > num){
                right = mid;
                mid = Math.floor((right + left)/2);
            }else if( arr[mid] < num){
                left = mid;
                mid = Math.floor((left + right)/2);
            }
        }
    }else{
        pos =arr.length-1;
    }
    return pos;
}

//功能为合并两个升序数组为一个升序数组
var arr3 = [3,6,7,45,55];
var arr4 = [8,10,11,22,25];
order(arr3,arr4);
function order(arr1,arr2){
    var res = [];
    let i =0,j=0,k=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res[k++] = arr1[i++];
        }else{
            res[k++] = arr2[j++];
        }
    }
    if(i==arr1.length){
        while(j<arr2.length){
            res[k++] = arr2[j++];
        }
    }
    if(j==arr2.length){
        while(i<arr1.length){
            res[k++] = arr1[i++];
        }
    }
    console.log(res);
}
var obj = {};
obj instanceof Object;

function instanceof2(left,obj){
    obj = obj.prototype;
    letf = left.__proto__;
    while(true){
        if(left == null){
            return false;
        }
        if(left == obj){
            return true;
        }
        left = left.__proto__;
    }
}