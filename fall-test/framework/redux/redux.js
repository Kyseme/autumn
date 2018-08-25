/**store 
 * 我们可以通过redux提供的createStore这个方法来创建一个Store,
 * 他接受对state进行处理的reducer作为参数
 * 
 * store:三个方法
 * 1. getState:获取store里面存储的数据
 * 2. dispatch：store里面的数据是不能直接进行修改的，只能通过触发action来进行修改，而dispatch就是用来触发action的
 * 3. subscribe：每次数据变化后，我们都希望能在视图上看到相应的更改。那么我们就需要一个方法来自动调用render来进行更新视图。这个地方采用的是订阅者模式，使用subscribe方法进行相应的操作
 */

 //简易版createStore
 function createStore(reducer){
    let state = null;
    const listeners = [];
    const subscribe = (listener)=>{listeners.push(listener)};
    const getState = () =>state;
    const dispatch = (action) =>{
        state = reducer(state.action);
        listeners.forEach((listener)=>listener());
    }
 }