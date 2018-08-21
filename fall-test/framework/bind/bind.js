/**vue双像数据绑定
 * 简洁版
 */

let data = {price:5,quantity:2};
let target = null;

class Dep{
    constructor(){
        this.sunscribers = [];
    }
    depend(){
        if(target && !this.sunscribers.includes(target)){
            this.sunscribers.push(target);
        }
    }
    noify(){
        this.sunscribers.forEach(sub=>{
            sub();
        })
    }
}

Object.keys(data).forEach(key=>{
    let internalValue = data[key];
    const dep = new Dep();
    Object.defineProperty(data,key,{
        get(){
            dep.depend();
            return internalValue;
        },
        set(newVal){
            internalValue = newVal;
            dep.noify();
        }
    })
})

function watcher(myFunc){
    target = myFunc;
    target();
    target = null;
}
watcher(()=>{
    data.total = data.price * data.quantity;
})