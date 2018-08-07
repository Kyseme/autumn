var counter = 3;
function add(){
    counter++;
}
var foo = 'bar';

setTimeout(()=>{
    foo='baa';
},10)
module.exports = {
    counter:counter,
    add:add,
    foo:foo,
}