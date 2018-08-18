/**
 * 数字在排序数组中出现的次数
 */

var data = [1,2,3,3,3,3,4,5];
var data=[3];
var k = 3;
console.log(GetNumberOfK(data,k));

function GetNumberOfK(data, k){
   if(data==null||data.length<=0){
       return 0;
   }
   let start = 0;
   let end = data.length-1;
   let s = getFirstNum(data,start,end,k);
   console.log(s);
   let e = getLastNum(data,start,end,k);
   console.log(e);
   let results = 0;
   if(e>=s && e!=-1 && s!=-1){
        results = e-s+1;
   }
   return results;
}



function getFirstNum(data,start,end,k){
    let mid,midNum;
    while(start<=end){
        mid = Math.floor((start+end)/2);
        midNum = data[mid];
        if(midNum==k){
            if((mid>0 && data[mid-1]!=k)||mid==0){
                return mid;
            }else{
                end = mid-1;
            }
        }else if(midNum>k){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}

function getLastNum(data,start,end,k){
    let mid,midNum;
    while(start<=end){
        mid = Math.floor((start+end)/2);
        midNum = data[mid];
        if(midNum==k){
            if((mid<data.length-1 && data[mid+1]!=k)|| mid==data.length-1){
                return mid;
            }else{
                start = mid +1;
            }
        }else if(midNum>k){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}