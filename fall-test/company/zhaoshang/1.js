
function getCore(str){
    let bTotal = 0,gTotal = 0; 
    let bCount = 0; 
    let gCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == 'C'){
            bCount++;
            bTotal += i;
        }
        if(str[i] == 'D'){
            gCount++;
            gTotal += i;
        }
    }
    bTotal = bTotal - (bCount - 1) * bCount / 2;
    gTotal = gTotal - (gCount - 1) * gCount / 2;
    return bTotal > gTotal ? gTotal: bTotal;
}
var str = 'CCDCC';
console.log(getCore(str));