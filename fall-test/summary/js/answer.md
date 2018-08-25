### 数组和链表的区别 

两种不同的数据结构

数组的特点
- 内存中，数组是一块连续的区域
- 数组需要预留空间，在使用前要申请占内存的大小，否则，可能会浪费内存空间
- 插入数据和删除数据效率低
- 随机读取效率高

链表的特点
- 在内存中可以存在任何地方，不要求连续
- 每一个数据都保存了下一个数据的内存地址，通过这个地址找到下一个数据
- 增加数据和删除数据很容易
- 查找数据效率低，不具有随机访问性.访问某个位置数据都要从第一个数据开始访问，然后遍历

### 类数组转化为数组

```javascript
    //1.slice
    Array.prototype.slice.call(arrayLike);
    //2.splice
    Array.prototype.splice.call(arrayLike,0);
    
    Array.from()

    Array.prototype.concat.apply([],arrayLike);

```
### post提交请求
- application/x-www-form-urlencoded
提交的数据按照 key1=val1&key2=val2 的方式进行编码，key和 val都进行URL 转码
- multipart/form-data
我们使用表单上传文件时，必须让 <form> 表单的 enctype 等于 multipart/form-data
- application/json


### http请求头部和响应头部都有哪些？

请求头部
- Accept:浏览器能够处理的内容类型
- Accept-Language：浏览器当前设置的语言
- Accept-Encoding：浏览器能够处理的压缩编码
- Connection：浏览器与服务器之间连接的类型
- Cookie：当前页面设置的任何Cookie
- Referer：发出请求的页面的URL
- User-Agent：浏览器的用户代理字符串

响应头部
- Date：表示消息发送的时间，时间的描述格式由rfc822定义
- Connection：浏览器与服务器之间连接的类型
- content-type:表示后面的文档属于什么MIME类型
- Cache-Control：控制HTTP缓存s
- ETag: W/"047844a5d08d729f28e68f2006ef8708"
- Set-Cookie: locale=zh-CN; path=/
- X-XSS-Protection: 1; mode=block
- Access-Control-Allow-Origin 指定哪些站点可以参与跨站资源共享
- Content-Length 响应体的字节长度
- ETag 特定版本资源的标识符，通常是消息摘要
- Expires 设置响应体的过期时间
- Last-Modified 设置请求对象最后一次的修改日期