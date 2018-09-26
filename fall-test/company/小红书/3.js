
var n = 13;

console.log(find1InNum(100));

function find1InNum(n){
    let count = 0,ifactor = 1,lowNum = 0,current = 0,heighNum = 0;
    while(Math.floor(n/ifactor)!=0){
        lowNum = n - Math.floor(n/ifactor)*ifactor;
        current = Math.floor(n/ifactor)%10;
        heighNum = Math.floor(n/(ifactor*10));
        switch(current){
            case 0:
                count += heighNum*ifactor;
                break;
            case 1:
                count += heighNum*ifactor+lowNum+1;
                break;
            default:
                count += (heighNum+1)*ifactor;
                break;
        }
        ifactor = ifactor*10;
    }
    return count;
}