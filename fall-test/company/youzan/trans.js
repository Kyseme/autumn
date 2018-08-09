
/* 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
例如110000000000000000000000000000000000000000000000，
表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
时间区间被选中，
例如110010000000000000000000000000000000000000000000，
表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
示例输入："110010000000000000000000000000000000000000000000"
示例输出：["00:00~01:00", "02:00~02:30"] */
var str ='110010000000000000000000000000000000000000000000';
transform(str);
function transform(str){
    var len = str.length;
    // var arr = str.split('');
    var res = [];
    let i =0;
    while(i<len){
        if(str[i]==1){
            let start = i;
            ++i;
            while(str[i]==1&&i<len){
                ++i;
            }
            let ss = getStr(start)+'~'+getStr(i);
            res.push(ss);
        }else{
            i++;
        }
    }
    

   console.log(res);
}

function getStr(num) {
    switch (num) {
        case 0:
            return '00:00';
        case 1:
            return '00:30';
        case 2:
            return '01:00';
        case 3:
            return '01:30';
        case 4:
            return '02:00';
        case 5:
            return '02:30';
        case 6:
            return '03:00';
        case 7:
            return '03:30';
        case 8:
            return '04:00';
        case 9:
            return '04:30';
        case 10:
            return '05:00';
        case 11:
            return '05:30';
        case 12:
            return '06:00';
        case 13:
            return '06:30';
        case 14:
            return '07:00';
        case 15:
            return '07:30';
        case 16:
            return '08:00';
        case 17:
            return '08:30';
        case 18:
            return '09:00';
        case 19:
            return '09:30';
        case 20:
            return '10:00';
        case 21:
            return '10:30';
        case 22:
            return '11:00';
        case 23:
            return '11:30'; 
        case 24:
            return '10:00';
        case 25:
            return '12:30'; 
        case 26:
            return '13:00';
        case 27:
            return '13:30';
        case 28:
            return '14:00';
        case 29:
            return '14:30';
        case 30:
            return '15:00';
        case 31:
            return '15:30';
        case 32:
            return '16:00';
        case 33:
            return '16:30';
        case 34:
            return '17:00';
        case 35:
            return '17:30';
        case 36:
            return '18:00';
        case 37:
            return '18:30';
        case 38:
            return '19:00';
        case 39:
            return '19:30'; 
        case 40:
            return '20:00';
        case 41:
            return '20:30'; 
        case 42:
            return '21:00';
        case 43:
            return '21:30';
        case 44:
            return '22:00';
        case 45:
            return '22:30'; 
        case 46:
            return '23:00';
        case 47:
            return '23:30';
        case 48:
            return '24:00';
    }
}