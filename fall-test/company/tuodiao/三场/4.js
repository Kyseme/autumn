

var arr = [197,130,1];
console.log(validUtf8(arr));
function validUtf8(arr) {
    let res = 0;
    for(let item of arr){
        if(res == 0){
            if((item>>5) == 0b110) res = 1;  
            else if((item>>4) == 0b1110) res=2;
            else if((item>>3) == 0b11110) res=3;
            else if((item>>7) != 0) return 0;
        }else{
            if((item>>6) != 0b10) return 0;
            res--;
        }
    }
    return res == 0?1:0;
}