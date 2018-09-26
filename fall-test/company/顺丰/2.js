var d1 = '2018-06-23 12:20';
var d2 = '2018-06-22 11:10';
// d2 ='hell'
console.log(compareDate(d1,d2));
function compareDate(d1,d2){
    try{
        var date1 = new Date(d1);
        var date2 = new Date(d2);
        if(isNaN(date1) || isNaN(date2)) return 0;
        var times = Math.round(Math.abs(date1.getTime()-date2.getTime())/60000);
        var k = times%60;
        k = k>=30 && k<59 ? 30:k <30 ? 0 :k;
        var h = Math.floor(times/60);
        times = h*60 + k;
        times = times/60;
        return times;
    }catch(e){
        return 0;
    }
    
}