console.log('test')
var arr = [2, [3], 'ss', [8,4, [9]]];

console.log()
//var ss = [2,3,'ss',8,4,[9]] 
flatten(arr);
function flatten(arr){
    if(arr==null || arr.length<=0){
        return;
    }
    
    var temp = [];
    for(let item of arr){
          if(Array.isArray(item)){
            temp.push(...item);
        }else{
            temp.push(item);
        }
    }
    console.log(temp);
}


