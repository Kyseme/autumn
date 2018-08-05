var p1 = new Promise((resolve, reject) => { 
    resolve(p1);
    // setTimeout(()=>{console.log('p1');resolve(p1)}, 1000, 'one'); 
  }); 
  // var p2 = new Promise((resolve, reject) => { 
  //   setTimeout(()=>{console.log('p2');resolve(p2)}, 2000, 'two'); 
  // });
  // var p3 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{console.log('p3');resolve()}, 3000, 'three');
  // });
  // var p4 = new Promise((resolve, reject) => {
  //   setTimeout(()=>{console.log('p4');resolve()}, 4000, 'four');
  // });
  // var p5 = new Promise((resolve, reject) => {
  //   reject('reject');
  // });
  
//   Promise.all([p1, p2, p3, p4, p5]).then(values => { 
//     console.log(values);
//   }, reason => {
//     console.log(reason)
//   });
  
//   //From console:
//   //"reject"

  
//   //You can also use .catch
  // Promise.all([p1, p2]).then(values => { 
  //   console.log(values);
  // }).catch(reason => { 
  //   console.log(reason)
  // });
p1.then((res)=>{
  console.log(res)
})