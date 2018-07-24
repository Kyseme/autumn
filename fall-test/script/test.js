console.log('sunine');

var index = 2;

function add(){
    index++;

    format(index);
}
function format(index){
    let width = index*3;
    this.index = 12;
    console.log(index)
}
add();
console.log(index);