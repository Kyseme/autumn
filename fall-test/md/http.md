
HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。一旦建立连接后，数据消息就通过类似Internet邮件所使用的格式[RFC5322]和多用途Internet邮件扩展（MIME）[RFC2045]来传送。

- 客户端请求消息：请求行、请求头部、空行和请求数据。

1         GET /hello.txt HTTP/1.1        

2        User-Agent: curl/7.16.3 libcurl/7.16.3    

3        OpenSSL/0.9.7l zlib/1.2.3   

4        Host: www.example.com Accept-Language: en, mi

                   
- 服务端响应消息：状态行、消息报头、空行和响应正文。

1        HTTP/1.1 200 OK  

2        Date: Mon, 27 Jul 2009 12:28:53 GMT

3        Server: Apache 

4        Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT

5        ETag: "34aa387-d-1568eb00"

6        Accept-Ranges: bytes

7        Content-Length: 51

8        Vary: Accept-Encoding

9        Content-Type: text/plain

### 请求方法
GET     请求指定的页面信息，并返回实体主体。
HEAD    类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
POST    向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
PUT     从客户端向服务器传送的数据取代指定的文档的内容。
DELETE  请求服务器删除指定的页面。
CONNECT HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
OPTIONS 允许客户端查看服务器的性能。
TRACE   回显服务器收到的请求，主要用于测试或诊断。

                         

                           

                          

                           

                           

                           

                           

                           

                    