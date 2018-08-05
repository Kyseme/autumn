

H5页面布局

如何计算页面的font-size


less有什么好处

angular脏检查

angular依赖注入？

canvas 


diff算法


react两个同级组件通信


浏览器怎么去命中缓存

### const声明常量
const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。


### XMLHttpRequest2.0新特性
新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进
- 可以设置HTTP请求的时限。
- 可以使用FormData对象管理表单数据。
- 可以上传文件。
- 可以请求不同域名下的数据（跨域请求）。
- 可以获取服务器端的二进制数据。
- 可以获得数据传输的进度信息。

**HTTP请求的时限**
版本的XMLHttpRequest对象，增加了timeout属性，可以设置HTTP请求的时限
```javascript
    xhr.timeout = 3000;//设置最长等待时间3000毫秒
    xhr.ontimeout = function(event){
    　　alert('请求超时！');
    }
```
**FormData对象**
ajax操作往往用来传递表单数据。为了方便表单处理，HTML 5新增了一个FormData对象，可以模拟表单。
```javascript
    var formData = new FormData();//新建一个formdata对象
    formData.append('username', '张三');
　  xhr.send(formData);
```
**上传文件**
新版XMLHttpRequest对象，不仅可以发送文本信息，还可以上传文件
假定files是一个"选择文件"的表单元素（input[type="file"]），我们将它装入FormData对象。
```javascript
    var formData = new FormData();
    for (var i = 0; i < files.length;i++) {
　　　　formData.append('files[]', files[i]);
    }
    xhr.send(formData);
```

**跨越资源共享**
使用"跨域资源共享"的前提，是浏览器必须支持这个功能，而且服务器端必须同意这种"跨域"。如果能够满足上面的条件，则代码的写法与不跨域的请求完全一样。
```javascript
    xhr.open('GET', 'http://other.server/and/path/to/script');
```

**接收二进制数据**
从服务器取回二进制数据，较新的方法是使用新增的responseType属性。如果服务器返回文本数据，这个属性的值是"TEXT"，这是默认值。

可以把responseType设为blob，表示服务器传回的是二进制对象。
```javascript
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/path/to/image.png');
    xhr.responseType = 'blob';
    //接收数据的时候，用浏览器自带的Blob对象即可
    var blob = new Blob([xhr.response], {type: 'image/png'});
```

**进度信息**
新版本的XMLHttpRequest对象，传送数据的时候，有一个progress事件，用来返回进度信息
它分成上传和下载两种情况。下载的progress事件属于XMLHttpRequest对象，上传的progress事件属于XMLHttpRequest.upload对象

```javascript
    //定义progress事件的回调
    xhr.onprogress = updateProgress;
    xhr.upload.onprogress = updateProgress;
    function updateProgress(event) {
　　　　if (event.lengthComputable) {
　　　　　　var percentComplete = event.loaded / event.total;
　　　　}
　　}
```