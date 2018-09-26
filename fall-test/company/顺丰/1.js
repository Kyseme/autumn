
var str1 = 'abc';
var str2 = 'bcd';
str1 = 'asdf';
str2 = 'wqerd';
console.log(compare(str1,str2));
function compare(str, str1) {
    var strs = str + str1;
    if(strs == null || strs.length <=0)return strs;
    var obj = {};
    var res = [];
    for(var i = 0;i<strs.length;i++){
        if(obj[strs[i]]) ++obj[strs[i]];
        else obj[strs[i]] = 1;
    }
    for(var key in obj){
        if(obj[key]==1) res.push(key);
    }
    res.sort(function(a,b){
        return a.charCodeAt() - b.charCodeAt();
    });
    var copy = res.slice(0);
    for(var j = copy.length-1;j>=0;--j){
        res.push(copy[j]);
    }
    return res.join('');
}