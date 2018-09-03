### 伪类和伪元素区别
本质上的区别是是否创建了新元素,伪类是一种状态，伪元素是一种更加具体的元素

### 如何优化seo

### 函数变量提升

```javascript
    //在提升过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升
    b(); //b
    function b(){
        console.log('a');
    }
     function b(){
        console.log('b');
    }
    var b = 'hello';
```
### 函数节流和防抖

>函数防抖：当调用动作过n毫秒后，才会执行该操作，若在n毫秒内调用此操作，则重新计算执行时间
>函数节流：当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期

防抖函数

```javascript
    function debounce(fn,wait){
        var timer = null;
        return funciton(){
            clearTimeOut(timer);
            timer = setTimeout(() => {
                fn();
            }, wait);
        }
    }

    function _log(){
        console.log(1);
    }
    window.onscroll = debounce(_log,300);


    //升级版
    function _debounce(func,wait,immediate){
        let timeout,result;
        let debounced = function(){
            let context = this;
            let args = arguments;
            if(timeout) clearTimeOut(timeout);
            if(immediate){
                let callNow = !timeout;
                setTimeout(funciton(){
                    timeout = null;
                },wait);
                if(callNow) result = context.apply(context,args);
            }else{
                timeout = setTimeout(function(){
                    func.apply(context,args);
                },wait);
            }
            return result;
        }
        debounced.cancle = function(){
            clearTimeOut(timeout);
            timeout = null;
        }
        return debounced;
    }
```

函数节流

```javascript
    function _throttle(fn,wait,time){
        var previous = null;// 记录上次运行的时间
        var timer = null;
        return funciton(){
            var now = +new Date();
            if(!previous) previous = now;
            //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
            if(now - previous>time){
                clearTimeOut(timer);
                fn();
                previous = now;//// 执行函数后，马上记录当前时间
            }else{
                clearTimeOut(timer);
                timer = setTimeout(funciton(){
                    fn();
                },wait)
            }
        }
    }
    function _log(){
        console.log(1)
    }
    window.onscroll = _debounce(_log,500,2000)
```
函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现

### 浏览器渲染过程
1. 解析整个html文档(HTML解析为DOM,CSS代码解析为CSSOM)
2. 解析过程中遇到外部脚本和资源就异步下载，下载好后缓存
3. 将dom和cssdom构建成渲染树(解析文档的过程就已经开始构建渲染树了)---渲染树构建完成则触发DOMContentLoaded事件
4. 根据渲染树渲染页面(计算布局，绘制页面)
5. 渲染过程中遇到script节点(不含defer和async)时，暂停渲染，执行js脚本
    如果是异步脚本，则不会阻塞渲染
  - 如果脚本带有defer属性，则不会执行，需要等到页面渲染完成再执行
  - 如果脚本带有asyn属性，则下载完成后就执行，不需要等到页面渲染完再执行
6. 继续渲染直到完成 -----页面渲染完成触发load事件

以上过程并非严格按照顺序执行，第一步还没完成，第二第三步可能就已经开始了。第二第三部还没完成，第四部就已经开始了

### webpack详解
新特性：
1. 对 CommonJS 、 AMD 、ES6的语法做了兼容
2. 对js、css、图片等资源文件都支持打包
3. 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对CoffeeScript、ES6的支持
4. 有独立的配置文件webpack.config.js
5. 可以将代码切割成不同的chunk，实现按需加载，降低了初始化时间
6. 支持 SourceUrls 和 SourceMaps，易于调试
7. 具有强大的Plugin接口，大多是内部插件，使用起来比较灵活
8. webpack 使用异步 IO 并具有多级缓存。这使得 webpack 很快且在增量编译上更加快

enhanced-resolve 模块解析
在 webpack 配置中，和模块路径解析相关的配置都在 resolve 字段下
resolve.alias   resolve.extensions  resolve.extensions

提高开发效率：模块热替换
优化前端资源
- 图片压缩  image-webpak-loader
- 分离代码文件 extract-text-webpack-plugin
先简单解释一下为何要把 CSS 文件分离出来，而不是直接一起打包在 JS 中。最主要的原因是我们希望更好地利用缓存
- Tree shaking 
移除 JavaScript 上下文中的未引用代码，删掉用不着的代码，能够有效减少 JS 代码文件的大小

- 减少 resolve 的解析
- 把 loader 应用的文件范围缩小

### react中diff算法

tree diff  updateDepth

在不同级别的时候
- 如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。
- 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。
- 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。

同一级别的时候

React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除