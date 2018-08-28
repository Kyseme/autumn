//实现instance of
function instanceof2(left,right){
    let prototype = right.prototype;
    left = left.__proto__;
    while(true){
        if(left==null){
            return false;
        }
        if(left == prototype){
            return true;
        }
        left = left.__proto__;
    }
}