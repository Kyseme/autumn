var inject = {
    dependencies:{},
    register:function(key,value){
        this.dependencies[key] = value;
    },
    resolve:function(deps,func,scope){
        console.log(deps[0])
        console.log(this.dependencies)
        var arr = [];
        for(var i=0;i<deps.lenghth;i++){
            if(this.dependencies.hasOwnProperty(deps[i])){
                arr.push(this.dependencies[deps[i]]);
            }
        }
        console.log(arr);
        return function(){
            func.apply(scope||{},arr);
        }
    }
}
inject.register('$http',{'test':function(){console.log('test')}});
// var ss = inject.resolve(['$http','$scope'],ss);
// ss()