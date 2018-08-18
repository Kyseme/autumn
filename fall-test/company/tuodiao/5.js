
var n = 3;
var m = 10;
var list = [{s:0,t:3},{s:3,t:7},{s:7,t:0}];
console.log(getMaxHost(n,m,list));

// var n = parseInt(readline());
// var m = parseInt(readline());
// var line = readline().split(' ');
// var ans = [];
// for(let i =0;i<n;i+=2){
//     ans.push({s:line[i],t:line[i+1]});
// }
// let result = getMaxHost(n,m,ans);
// print(result);


function getMaxHost(n, m, list) {
    list.sort(function (a, b) {
        return a.t - b.t;
    });
    let times = 0;
    let lastTime = 0;
    for (let i = 0; i < list.length; i++) {
        if (i == 0) {
            lastTime = list[i].t;
            if(list[i].t-list[i].s>0){
                m = m-(list[i].t-list[i].s);
                if(m<0){
                    break;
                }
            }
            times++;
        } else {
            if (lastTime <= list[i].s) {
                if(list[i].t-list[i].s>0){
                    m = m-(list[i].t-list[i].s);
                    if(m<0){
                        break;
                    }
                }
                times++;
                lastTime = list[i].t;
            }
        }
    }
    return times;
}