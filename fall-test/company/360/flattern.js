


var arr = [1,2,3,[5],[7,[8,9]]];

function flattern(arr){
    if(arr==null || arr.length<=0){
        return;
    }
    var temp = [];
    arr.forEach((item)=>{
        // temp = temp.concat(item);
        if(Array.isArray(item)){
            temp.push(...item);
        }else{
            temp.push(item);
        }
    })
    console.log(temp);

}
flattern(arr);