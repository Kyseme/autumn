/**表示数值的字符串
 * 
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 
 * 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 */

 console.log(Number('12e'));
 console.log(NaN.toString())
//s字符串
function isNumeric(s)
{
    if(Number(s).toString() != 'NaN'){
        return true;
    }
    return false;
}

function isNumeric2(s)
{
    var reg = /[+-]?[0-9]*(\\.[0-9]*)?([eE][+-]?[0-9]+)?/;
    return s.match(reg);
}