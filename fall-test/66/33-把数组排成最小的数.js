/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，
 * 则打印出这三个数字能排成的最小数字为321323。
 */

var arr = [3,32,321];
function PrintMinNumber(numbers)
{
    let end = numbers.length-1;
    return quickSort(numbers,0,end);
}
console.log(PrintMinNumber(arr));
function quickSort(arr,start,end){
    if(start<end){
        var temp = arr[start];
        let i = start;
        let j = end;
        while(i<j){
            while(compare(arr[j],temp) && i<j){
                j--;
            }
            while(compare(temp,arr[i]) && i<j){
                i++;
            }
            if(i<j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        arr[start] = arr[i];
        arr[i] = temp;
        quickSort(arr,start,i-1);
        quickSort(arr,i+1,end);
        return arr.join('')
        }else{
        return arr.join('');
    }

}

function compare(s1,s2){
    if(s1==null||s2==null){
        throw new Error('数组为空')
    }
    var ss1 = s1.toString()+s2.toString();
    var ss2 = s2.toString()+s1.toString();
    return ss1>=ss2;
}