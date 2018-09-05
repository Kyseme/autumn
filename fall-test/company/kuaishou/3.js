var obj = {
    add:()=>{
        console.log(this); //window
    }
}

obj.add();


function abc() {
    var obj = {
        add: () => {
             console.log(this);
             (function() {
                console.log(this);
             })();
        }
    }
    obj.add();
}