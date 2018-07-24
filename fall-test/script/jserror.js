// [ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]


var val = 'smtg';
// console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
//it actually prints 'Something' the + operator has higher precedence than the ternary one.

function sidEffecting(ary) {
    ary[0] = 5;
  }
function bar(a,b,c=3) {
    c = 10;
    console.log(a,b,c);
    console.log(arguments);
    sidEffecting(arguments);
    console.log(arguments);
    console.log(a,b,c);
    return a + b + c;
}
// bar(1,1,1)

// function add(obj){
//     obj.name="sunine";
// }
// var o = {name:"kyseme"}
// add(o);
// console.log(o)

function list(type) {
    // console.log(type);
    // console.log(arguments)
    var result = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    result += args.join('</li><li>');
    result += '</li></' + type + 'l>'; // end list
  
    return result;
  }
//   var listHTML = list('u', 'One', 'Two', 'Three');