### 实现jquery的html方法
```javascript
     function getHtml(dom){
        var temp = document.createElement('div');
        temp.appendChild(dom);
        return temp.innerHTML;
    }
```

### 在ul标签中批量插入li
```javascript
function insertDom(n){
    var frage = document.createDocumentFragment();
    for(let i=0;i<n;i++){
        let liDom = document.createElement('li');
        frage.appendChild(liDom);
    }
    var ulDom = document.querySelector('.box ul')
    ulDom.appendChild(frage);
}

//用innerHTML
function insertDom(n){
    var str = '';
    for(let i=0;i<n;i++){
        str += '<li></li>'
    }
    var ulDom = document.querySelector('.box ul')
    ulDom.innerHTML = str;
}
```
### children和childNodes的区别，给每个li绑定一个click事件
```html
    <ul>
        <li></li>  
        <li></li>
        <li></li>    
    </ul>
    <script>
        var ulDom = document.querySelector('ul');
        ulDom.children;//HTMLCollection(3) [li, li, li]
        ulDom.childNodes;//NodeList(7) [text, li, text, li, text, li, text]
    </script>
```

- childNodes 属性，标准的,它返回指定元素的子元素集合，包括HTML节点，所有属性，文本。可以通过nodeType来判断是哪种类型的节点，只有当nodeType==1时才是元素节点，2是属性节点，3是文本节点。

- children 属性,非标准的，它返回指定元素的子元素集合。经测试，它只返回HTML节点，甚至不返回文本节点。且在所有浏览器下表现惊人的一致。和childNodes 一样，在Firefox下不支持()取集合元素。因此如果想获取指定元素的第一个HTML节点，可以使用children[0]来替代上面的getFirst函数。需注意children在IE中包含注释节点。

```javascript
 var ulDom = document.querySelector('ul');
 var liDom = ulDom.children;
 //给每个li绑定一个事件
for(var i=0;i<n;i++){
    (function(j){
    liDom[j].onclick = function(){
        console.log(j);
    })(i)
}

//通过委托实现
ulDom.onclick = function(e){
    let target = e.target || e.srcElement;
    if(target.tagName.toUpperCase()==='LI'){
        console.log(Array.prototype.indexOf.call(this.children,target));
    }
}

```

### 两个数组，排序好的，a = [1,3,3,4,5,6] ,b = [9,6,3,2,1],a正序排序，b倒序排序，找第n个最大

```javascript
    function findNth(a,b,n){
        let count = 0;
        let i=0,j=b.length-1,result = '';
        while(count<n){
            if(b[j]>a[i]){
                ++count;
                ++j;
                result = b[j];
            }else{
                ++count;
                --i;
                result = a[i];
            }
        }
        return result;
    }
```
### 设计题

1. 一个搜索框，输入频繁，多次向服务器请求 ---- 做一个节流
2. 搜索框，第一个输入a，输入ab，再输入a，如何做到只向服务器请求一次  ----做缓存
3. a--->result{}      b--->result{}
异步请求，如何保证数据返回的是b请求返回的数据
在返回数据中，result带有b请求的数据，即a或者b在请求数据时带携带请求内容，服务器返回数据时携带请求内容，刚好做匹配。

### 空间复杂度和事件复杂度是如何计算出来的？



