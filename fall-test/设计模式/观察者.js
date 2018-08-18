/**
 * subject 维护一系列观察者，方便添加或删除观察者
 * observer 为那些目标状态发生改变时需要获得通知的对象提供一个更新接口
 * concreteSubject 具体目标
 * 
 * 
 */

 function ObserverList(){
     this.observerList = [];
 }
 ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj)
 } 

 ObserverList.prototype.empty= function(){
    return this.observerList = [];
 }

 ObserverList.prototype.count= function(){
    return this.observerList.length;
 }



 function Subject(){
    this.observers = new ObserverList();
 }
 Subject.prototype.addObserver = function(observer){
    return this.observers.add(observer);
 }
 Subject.prototype.removeObserver = function(){
    
}
Subject.prototype.notify = function(context){
    var count = this.observers.count();
    for(var i =0;i<count;i++){
        this.observers[i].update(context)
    }
}


function Observer(){
    this.update = function(){
        
    }
}