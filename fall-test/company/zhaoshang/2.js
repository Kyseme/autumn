

function maxProfit(prices) {
    if(prices==null||prices.length<2){
        return 0;
    }
    var min = prices[0];
    var curMaxPro = 0;
    for(let i=1;i<prices.length;i++){
        if(curMaxPro<prices[i]-min){
            curMaxPro = prices[i]-min;
        }
        if(prices[i]<min){
            min = prices[i];
        }
    }
    return curMaxPro;
}
var arr = [7,1,5,3,6,4];
// maxProfit(arr);

function minEatSpeed(piles, H) {
    let left = 1;
    let right = piles.reduce((a, b) => a+b);
    
    while (left <= right) {
      const mid = Math.trunc((left+right)/2);
      const temp = piles.map(p => Math.ceil(p/mid)).reduce((a, b) => a+b);
      
      if (temp <= H) {
        right = mid-1;
      } else {
        left = mid+1;
      }
    }
    return left;
  }
var piles = [3,6,7,11];
var H = 8;
minEatingSpeed(piles,H);