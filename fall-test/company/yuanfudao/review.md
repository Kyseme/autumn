react 15.3

componentWilMount

render

componentDidMount



this.setState

componentWillReceiveProps(props,state);

shouldComponentUpdate

componetWillUpdate

render

componentDidUpdate

<Comoponent name={}/>

redux

action dispatch   -- reducer   --- state  store

pureComponent  shouldComponentUpdate()

diff  render()    dom--> obj -->  dom

双向绑定     value  watch()   

html    angular  ng-  
return class 

rem em  -->font-size

rem -> html
em -->父级

vh  1%  vw 

antd  table -- >rowid  -- 唯一值 

cache-control : max-age   newTime ,etag     etag   if-None-Match ,expire   newTime

url 
dns  ip地址

tcp  请求  减少请求发送

返回数据

js /css   页面
打包  ，压缩
dom   framement  
静态资源走cdn
const obj = {
    id: 1,
    arr: [1,2,3],
    innerObj: { id: 1, value: 2 },
    objArr: [{ id: 2, value: 4 }, { id: 3, value: 6 }]
}

getValue(obj, ‘id’)  // 1
getValue(obj, ‘arr[0][1]’)  // 1
getValue(obj, ‘objArr[1][2].id’)  // 3

function getValue(obj, path) {
var path =  path.replace('[','.').replace(']','');
  if (path.indexOf('.')!=-1) {
            let arr = path.split('.');
            let myobj = obj;
            for (let i = 0; i < arr.length; i++) {
                if (myobj[arr[i]]) {
                    myobj = myobj[arr[i]];
                    if (i == (arr.length - 1)) {
                        return myobj;
                    }
                } else {
                    return undefined;
                }
            }
        } else {
            return obj[path];
        }
}

new 

var obj = new Object();
obj.__proto__  Object.prototype
this    obj 
function Object(){ }

obj.call(Object,item....)   apply( array)
