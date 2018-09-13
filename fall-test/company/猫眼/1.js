/**
void print(int[] arr) {
// "1:0 15:13"
示例1：// arr = {1,-1,1,1,-1}   print "0:0 3:2"
}

示例2：// arr = {-1, -1, -1} print "0:0 0:3"
示例3：// arr = {（1,1,1,1,1,1.....21个1）, -1, -1, -1} print "1:0 0:3"

示例4：// arr= {1,1,1,1,...21个1}  0:0 21:0
var arr = [1,-1,1,1,-1];
var arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
 */

var arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
console.log(print(arr));
function print(arr){
    let left = 0;
    let right = 0;
    let leftSorce = 0;
    let rihgtSorce = 0;
    let len = arr.length;
    for(let i = 0;i<len;i++){
        if(arr[i]==1){
            ++left;
            console.log(left);
        }else{
            ++right;
        }
        if(left == 21 && right <= 19){
            ++leftSorce;
            left = 0;
            right = 0;
        }
        if(right == 21 && left <=19){
            ++rihgtSorce;
            left = 0;
            right = 0;
        }
        if(left>21 && left-right==2){
             ++leftSorce;
            left = 0;
            right = 0;
        }
        if(right>21 && right-left==2){
            ++rihgtSorce;
            left = 0;
            right = 0;
        }
       
    }
   return `${leftSorce}:${rihgtSorce} ${left}:${right}`;
}