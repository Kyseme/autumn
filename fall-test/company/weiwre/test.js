
var a = ['hello','hi'] ;var b = ['world','bye'];
// commonSubstring(a,b);
function commonSubstring(a, b) {
    if(a==null || b==null || a.length<=0 || b.length<=0){
        return;
    }
    for(let i=0;i<a.length;i++){
        let temp = a[i].split('');
        let j = 0;let flag = true;
        while(j<temp.length && flag){
            if(b[i].indexOf(temp[j])!=-1){
                console.log('YES');
                flag = false;
            }
            j++;
        }
        if(flag) console.log('NO');
    }
}
var arr = [1,1,2,2,2,3];
countDuplicates(arr);
function countDuplicates(numbers) {
    if(numbers==null || numbers.length<=0){
        return 0;
    }
    var obj = {};
    var count = 0;
    for(let i=0;i<numbers.length;i++){
        if(obj[numbers[i]]){
            obj[numbers[i]]++;
        }else{
            obj[numbers[i]] = 1;
        }
    }
    for(let j in obj){
        if(obj[j]>1){
            count++;
        }
    }
    console.log(count);
}