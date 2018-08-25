var book = {};
Object.defineProperties(book,{
    _year:{
        value:2018
    },
    edition:{
        value:1
    },
    year:{
        get:function(){
            return this._year;
		},
        set:function(newVal){
            if(newVal>2018){
                thie._year = newVal;
                this.edition += newVal - 2018;
            }
        }
    }
})
// 数值属性
var descriptor = Object.getOwnPropertyDescriptor(book,'_year');
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get)

//访问器属性
var descriptors = Object.getOwnPropertyDescriptor(book,'year');
console.log(descriptors.value);
console.log(descriptors.configurable);
console.log(typeof descriptors.get)


var obj = {};
obj.name = 'sunine';
var names = Object.getOwnPropertyDescriptor(obj,'name');
console.log(names.value);
console.log(names.configurable);
console.log(names.enumerable);
console.log(names.writable);
