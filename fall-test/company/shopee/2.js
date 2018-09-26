

var data = {"name":"Sunine Sum",'gender':'男'};

var str = '<% name %>，欢迎来到这里，祝你早日找到<%gender%>盆友!';
var str = '欢迎来到这里，祝你早日找到!';
replaceStr(str,data);
function replaceStr(str,data){
    if(str == null || str.length<=0) return str;
    str = str.replace(/<%\s?([a-zA-Z]+)\s?%>/g,function(n1,n2){
        return data[n2]?data[n2]:"";
    });
    console.log(str);
}