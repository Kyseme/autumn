
const timeout = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, ms);
});

const ajax1 = () => timeout(2000).then(() => {
	console.log('1');
	return 1;
});

const ajax2 = () => timeout(1000).then(() => {
	console.log('2');
	return 2;
});

const ajax3 = () => timeout(2000).then(() => {
	console.log('3');
	return 3;
});

// const mergePromise = ajaxArray => {
//     return new Promise(function(resolve, reject) {
//         var resolvedCounter = 0;
//         var promiseNum = ajaxArray.length;
//         var resolvedValues = [];
//         for (var i = 0; i < promiseNum; i++) {
//           (function(i) {
//             Promise.resolve(ajaxArray[i]()).then(function(value) {
//               resolvedCounter++
//               resolvedValues.push(value);
//               if (resolvedCounter == promiseNum) {
//                 return resolve(resolvedValues)
//               }
//             }, function(reason) {
//               return reject(reason)
//             })
//           })(i)
//         }
//       })
// };
const mergePromise = ajaxArray => {
        return new Promise(function(resolve, reject) {
            var resolvedCounter = 0;
            var promiseNum = ajaxArray.length;
            var resolvedValues = new Array(promiseNum);
          
                async function getData(){
                    for (var i = 0; i < promiseNum; i++) {
                        let res = await ajaxArray[i];
                        (function(res,i){
                           console.log(res)
                            res().then((re)=>{
                                console.log(resolvedValues)
                                resolvedValues[i] = re;
                            })
                        })(res,i);
                      
                }
                return resolvedValues;
            //   (function(i) {
            //     Promise.resolve(ajaxArray[i]).then(function(value) {
            //       resolvedCounter++
            //       resolvedValues.push(value);
            //       if (resolvedCounter == promiseNum) {
            //         return resolve(resolvedValues)
            //       }
            //     }, function(reason) {
            //       return reject(reason)
            //     })
            //   })(i)
            }
            resolvedValues = getData().then((v)=>v);
            console.log(resolvedValues)
            return resolve(resolvedValues);
          })
         
    };
mergePromise([ajax1, ajax2, ajax3]).then(data => {
	console.log('done');
	console.log(data); // data 为 [1, 2, 3]
});

// 分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]