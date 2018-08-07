---
title: 2018秋招
tags: 题目
notebook: 实习
---

### Q1: 在工作中有没有遇到什么问题？怎么解决的？

首先看一下问题的类型，如果框架或者是工具类相关的问题，会先去查一下官方文档，看看自己是不是写错了什么方法或者之前漏看了什么，
如果看文档没有解决问题，就去google或者百度一下这类问题，看一下别人怎么解决问题，如果问题是其他类型，直接google或者百度。

自己在实习写项目的时候遇到了很多问题，比较深刻的有，react框架中的defaultValue赋初始值的问题，defaultValue只在初始加载的时候起作用，
之后defaultValue将不会更新，需求是页面初始值是从初次加载页面从后台读取的数据，然而异步加载完数据之后，defalutValue的值已经覆盖不了。
我尝试了几种改进方法，第一种，将非受控组件转为受控组件，组件显示的值为value,等数据加载完成之后，再修改现实数据；第二种，在数据没有加载
完成之前隐藏表单数据，等加载完成之后再显示；第三种，封装表单数据，显示的表单数据为一个子组件，当有数据的时候子组件才显示数据，这样有一个
问题，就是父组件每一次状态的变化都会重新渲染子组件，可以在子组件中时候PureComponent或者重写 ShouldComponetUpdate方法


### Q2: 最近看了些什么书？说一下书中写了写什么？
白帽子讲web安全，吴翰清著，里面讲到了安全的三要素，机密性，完整性，可用性。其中讲了白帽子兵法，
- 黑名单 白名单
- 最小权限原则
- 纵深防御原则（首先，在各个不同层面，不同方面实施安全方案，避免出现疏漏，不同安全方案之间需要相互配合，构成一个整体；其次，要在正确的地方做正确的事情，在解决根本问题的地方实施针对性的安全方案）
- 数据与代码分离
同源策略是浏览器安全的基础。
描述了客户端和服务端安全问题，并通过实例进行了演示，主要有
- 跨站脚本攻击（XSS）  反射型 | 存储型 | 基于DOM的XSS 
    (XSS的本质是一种‘HTML注入’，用户的数据被当成了HTML代码一部分来执行，从而混淆了原来的语义，产生了新的语义)
    - "Set-Cookie":"HttpOnly"   //js无法读取cookie的值
    - "X-XSS-Protection": "1; mode=block"  //启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载
    - "Content-Security-Policy": "default-src \'self\'"; // 内容安全策略s
    - 输入输出字符转义

- 跨站点请求伪造（CSRF）
    是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF利用的是网站对用户网页浏览器的信任
    - 检查Referer字段   //var referer = request.headers['referer'];
    - SameSite  SameSite=Lax | Strict    "Set-Cookie": "SameSite=Strict"; //SameSite-cookies是一种机制，用于定义cookie如何跨域发送
    - 验证码
    - token
- 点击劫持
    攻击者引导用户点击某个按钮，在用户不知情的情况下盗取用户的信息或者诱导用户完成攻击者的操作
    - X-Frame-Options    DENY | SAMEORIGIN | ALLOW-FROM uri
    - 添加验证码等
等，然后对不同的攻击提出了不同的防御方法。


### Q3: 简单介绍一下cookies?
cookies的特性 
浏览器端数据存储 | 服务器端通过http头设置 | 请求时通过http头传给后端 | 前端可读写 | 遵守同源策略(协议，域名，端口)

cookies的作用
存储个性化设置 | 存储未登录时用户唯一标识 | 存储已登登录用户的凭证(用户ID+签名) | 存储其他业务数据

和cookies的有关头部设置
  - 域名
  - 有效期 :max-age=1,expires=Tue, 17 Jul 2018 02:03:36 GMT 
    if both (Expires and Max-Age) are set, Max-Age will have precedence.
  - 路径
  - HttpOnly
  - secure 
  限制web页面仅在https安全连接时，才可以发送cookie
  - SameSite:允许服务器设定一则 cookie 不随着跨域请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击
 

### Q4: http和https的区别？
http:超文本传输协议,https:超文本传输安全协议(HTTP+SSL/TLS),HTTPS在HTTP层和TCP层之间加了一个SSL层，SSL向上提供加密和解密的服务

HTTPS与HTTP的一些区别
- HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。
- HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。
- HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
- HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题
HTTPS的加密算法有两种，对称加密和非对称加密。

- 对称加密是一把密钥，这把密钥可以加密明文，也可以解密加密后的密文，常见的对称加密算法有AES、DES、RC4，目前最常用的是AES。
- 非对称加密是两把密钥，分别是公钥和私钥，公钥加密的密文只有相对应的私钥才能解密，私钥加密的内容也只有相对应的公钥才能解密，其中公钥是公开的，私钥是自己保存，不能公开，常见的非对称加密算法有RSA和ECC（椭圆曲线算法）
### Q5:  http2的特点？
http/2主要特征
- 二进制协议，可以做更多的优化；
- 多路复用，即连接共享，即每一个request都是是用作连接共享机制的。一定程度上解决了队头阻塞的问题，提高并发和总的加载时间
- 头部压缩，很多请求头或者响应头都没有必要重复传输浪费带宽，比如user-agent、cookie还有其他没有必要每次都传的头部在http2中都做了优化
- 安全，虽然RFC规定HTTP/2可以运行在明文之上，但目前所有浏览器都只支持https之上的http/2，所以是安全的。

开启一个http2
使用nginx
```
server {
    listen 443 ssl http2 default_server;
    server_name www.mf8.biz;

    ssl_certificate /path/to/public.crt;
    ssl_certificate_key /path/to/private.key;
}
```
### Q6:  说一下自己在唯品会做了些什么项目？学到了些什么？

### Q7:  http报文头部是什么.

- HTTP请求报文
在请求中，HTTP报文由方法／URI／HTTP版本／HTTP首部字段等部分构成

下面示例访问http://hackr.jp

```
GET /HTTP/1.1
Host:hackgr.jp
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36"
Accept: text/html,application/xhtml+xml,application-xml
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Cache-Control: max-age=0
```

- HTTP响应报文
在响应中，HTTP报文由HTTP版本／状态码／HTTP头部字段 组成。

```
HTTP/1.1    304 Not Modified
Date: Thu ,07 Jun 2018 13:21:36 GMT
Connetcion: close
```
    
### Q8:  为什么要有版本号，1.0，1.1，2.0的区别
HTTP1.0最早在网页中使用是在1996年，那个时候只是使用一些较为简单的网页上和网络请求上，而HTTP1.1则在1999年才开始广泛应用于现在的各大浏览器网络请求中，同时HTTP1.1也是当前使用最为广泛的HTTP协议。
主要区别主要体现在
- 缓存处理，在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
- 带宽优化及网络连接的使用，HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
- 错误通知的管理，在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。
- Host头处理，在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。
- 长连接，HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。以下是常见的HTTP1.0：

### Q9:   2.0中的多路复用怎么实现会话的串行传输；

### Q10:  POST和GET区别


### Q11:  输入url到页面显示出来之间的过程 越详细越好

### Q12: http头部有哪些内容？
HTTP首部字段根据实际用途分为以下4中类型
通用首部字段 | 请求首部字段 | 响应首部字段 | 实体首部字段

HTTP/1.1 规范定义了如下47中首部字段

### 通用首部字段

| 首部字段名称      | 说明                       | 属性值                                                 | 描述                                                         |
| ----------------- | -------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| Cache-Control     | 控制缓存行为               | no-cache\|no-store\|max-age\|public\|private\|s-maxage | private(响应仅供单个用户使用，不得由共享缓存存储) \| no-cache(不缓存过期的资源)\|  no-store（缓存不应存储有关客户端请求或服务器响应的任何内容） |
| Connection        | 连接管理                   | keep-alive\| close                                     | 客户端和服务器端的连接                                       |
| Date              | 创建报文的日期时间         |                                                        |                                                              |
| Trailer           | 报文末端首部一览           |                                                        |                                                              |
| Transfer-Encoding | 指定报文主体的传输编码方式 | chunked\|  compress\|  deflate \| gzip                 |                                                              |
| Via               | 代理服务器的相关信息       |                                                        | 追踪客户端与服务器之间的请求和响应报文的传输路径。报文经过代理或者网关时，会现在首部字段via中附加服务器的信息，然后再进行转发 |
| Warning           | 错误通知                   |                                                        |                                                              |

### 请求首部字段（部分）

| 首部字段名称        | 说明                                          | 属性值                                            | 描述                                                         |
| ------------------- | --------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| Accept              | 用户代理可处理的媒体类型                      | text/html,text/plain/image/jpeg,image/gif....     |                                                              |
| Accept-Charset      | 优先的字符集                                  | utf-8, iso-8859-1                                 |                                                              |
| Accept-Encoding     | 优先的内容编码                                | gzip \| compress \| deflate\| br \| identity \| * | gzip(由文件压缩程序gzip生成的编码格式)                       |
| Accept-Language     | 优先的语言                                    | en-US,en;q=0.5                                    |                                                              |
| Authorization       | Web认证信息                                   |                                                   |                                                              |
| Host                | 请求资源所在的服务器                          |                                                   |                                                              |
| If-Match            | 比较实体标记（ETag）                          |                                                   | 只有当If-Match字段和ETag值匹配一致，服务器才会接受请求       |
| If-Modified-Since   | 比较资源的更新时间                            |                                                   | If-Modified-Since指定的日期后，资源发生了更新，服务器会接受请求，如果请求资源没有更新，则返回304 Not Modified响应 |
| If-None-Match       | 比较实体标记（与If-Match相反）                |                                                   | if-Range字段值若跟ETag值或者更新的日期时间匹配一致，那么作为范围请求处理，若不一致，则忽略范围请求，返回全部资源 |
| If-Unmodified-Since | 比较资源的更新时间（与If-Modified-Since相反） |                                                   |                                                              |
| Range               | 实体字节防伪请求                              |                                                   |                                                              |
| Referer             | 对请求中URI的原始获取方                       |                                                   |                                                              |
| User-Agent          | HTTP客户端程序的信息                          |                                                   |                                                              |

### 响应首部字段（部分）

| 首部字段名称  | 说明                     | 属性值                | 描述                                                         |
| ------------- | ------------------------ | --------------------- | ------------------------------------------------------------ |
| Accept-Ranges | 是否接受字节范围请求     |                       |                                                              |
| ETag          | 资源的匹配信息           |                       |                                                              |
| Location      | 客户端重定向至指定的URI  |                       |                                                              |
| Vary          | 代理服务器缓存的管理信息 | Vary: Accept-Language | 当代理服务器收到带有Vary首部字段指定获取资源的请求时，如果使用的Accept-Language字段值相同，直接从缓存返回响应，否则，需要先从源服务器端获取资源后才能作为响应返回 |

### 实体首部字段（部分）

| 首部字段名称     | 说明                   | 属性值            | 描述 |
| ---------------- | ---------------------- | ----------------- | ---- |
| Allow            | 资源可支持的HTTP方法   | GET\|POST\|HEAD.. |      |
| Content-Encoding | 实体主体适用的编码方式 |                   |      |
| Content-Language | 实体主体的自然语言     |                   | Con  |
| Content-Length   | 实体主体的大小         |                   |      |
| Content-Location | 替代对应资源的URI      |                   |      |
| Content-Type     | 实体主体的媒体类型     | 同上              |      |
| Expires          | 实体主体过期的日期时间 |                   |      |
| Last-Modified    | 资源的最后修改日期     |                   |      |

### 其他头部信息

| 首部字段名称     | 说明                            | 属性值                                              | 描述                                                         |
| ---------------- | ------------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Set-Cookie       | 设置cookies                     | expires \| domain \| secure \| HttpOnly             |                                                              |
| X-Frame-Options  | 控制网页内容在frame标签内的显示 | deny \|SAMEORGIN \| ALLOW-FROM https://example.com/ | deny(不允许网页中嵌套frame),SAMEORGIN(同源域名下页面可以嵌套) |
| X-XSS-Protection | 针对跨站脚本攻击的一种对策      | 0 \| 1 \|1; mode=block \|1; report=&lt;reporting-uri&gt; | 1; mode=block(启用XSS过滤。 如果检测到攻击，浏览器将阻止呈现页面，而不是清理页面) |





### 用过cookie吗？如何修改cookie，除了js方法还有什么方法
document.cookie='name=sun';

### cookie有哪些参数，cookie的本质时什么，如果让你封装一个cookie怎么实现？

