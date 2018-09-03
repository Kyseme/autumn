import redux from 'redux';


//reducer
function count(state,action){
    var defalutState = {
        year:2018
    }
    state  = state || defalutState;
    switch(action.type){
        case 'add':
            return {year : state.year+1};
        case 'sub' : 
            return {year : state.year-1};
    }
}

//store
var store = redux.createStore(count);

//store里面的数据发生改变时，触发的回调函数
store.subscribe(function(){
    console.log('the year is: ', store.getState().year);
})

// action: 触发state改变的唯一方法(按照redux的设计思路)
var action1 = { type: 'add' };
var action2 = { type: 'add' };
var action3 = { type: 'sub' };


store.dispatch(action1); // 'the year is: 2016