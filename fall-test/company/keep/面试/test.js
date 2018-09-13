

setTimeout(function(){
    console.log(2);
})

new Promise((resolve,reject)=>{
    // setTimeout(function(){
    //     
    // })
    resolve(3); 
}).then((res)=>{console.log(res)});


setTimeout(function () {
    console.log(2);
})

new Promise((resolve, reject) => {
    resolve(3);
}).then((res) => { console.log(res) });