
### 前端两种主流跨域方案：JSONP 与 CORS。请问使用两种方案在 a.com 向 b.com 发起跨域请求时，b.com 的服务端能否解析到跨域请求携带的 cookie。

带填充的JSON,是一种可以在JS中绕过同源策略，并发起跨域HTTP请求的使用模式，可以启动JS的跨域HTTP请求

同源策略有一个显著的例外，HTML脚本元素是可以规避SOP检查的。那就意味着我们可以采用动态注入脚本的方式向其他源发出HTTP请求。
JSONP正是利用了这个例外情况进行跨域数据加载的。

```javascript
    windoow.jsonpCallback = function(res){
        console.log(res);
    }
    var script = document.createElement('script');
    script.src= 'http://jsonjs.com//info.js?callback=jsonpCallback';
    document.body.appendChild(script);
```
- jsonp仅适用于http和get请求
只能使用GET请求就意味着很多限制，提交到服务器的数据量将受限于浏览器的最大URL长度。
- jsonp缺乏错误处理机制
如果脚本注入成功后，就会调用回调函数，但是注入失败后，没有任何提示。这就意味着，当JSONP遇到404、505或者其他服务器错误时，你是无法检测出错原因的。
- jsonp可能会导致跨站请求伪造攻击
由于请求会携带cookie信息，服务器会认为是用户自己想要提交表单或者发送请求，而得到用户的一些隐私数据

CSRF攻击的大致原理是：

用户通过浏览器，访问正常网站A（例如某银行），通过用户的身份认证（比如用户名/密码）成功A网站。

网站A产生Cookie信息并返回给用户的浏览器； 

用户保持A网站页面登录状态，在同一浏览器中，打开一个新的TAB页访问恶意网站B；

网站B接收到用户请求后，返回一些攻击性代码，请求A网站的资源（例如转账请求）；

浏览器执行恶意代码，在用户不知情的情况下携带Cookie信息，向网站A发出请求。

网站A根据用户的Cookie信息核实用户身份（此时用户在A网站是已登录状态），A网站会处理该请求，导致来自网站B的恶意请求被执行。

出于安全原因，浏览器限制从脚本中发起的跨域HTTP请求。默认的安全限制为同源策略， 即JavaScript或Cookie只能访问同域下的内容。

W3C推荐了一种跨域的访问验证的机制，即CORS（Cross-Origin Resource Sharing 跨源资源共享）
这种机制让Web应用服务器能支持跨站访问控制，使跨站数据传输更加安全，减轻跨域HTTP请求的风险。

cors的验证处理分为简单请求验证处理和预先请求验证处理

简单请求
---
请求方法:  GET|HEAD|POST
简单请求时，浏览器会直接发送跨域请求，并在请求头中携带Origin的header，表明这是一个跨域的请求。

服务器端接到请求后，会根据自己的跨域规则，通过Access-Control-Allow-Origin和Access-Control-Allow-Methods响应头，来返回验证结果。
如果验证成功，则会直接返回访问的资源内容

