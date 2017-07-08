# 学习 Nodejs

## 一、基础
环境搭建：[sublime text 3 + nodejs](http://www.cnblogs.com/historymemory/p/6378542.html)

## 二、例子
使用 Node.js 编写的 web 服务器，响应返回 `Hello World`：
 ```
// example.js

 const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
```

运行：
```
$ node example.js
服务器运行在 http://127.0.0.1:3000/
```

[Node.js - API](http://nodejs.cn/api/documentation.html)
