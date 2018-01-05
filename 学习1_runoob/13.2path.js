var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// normalization : \test\test1\2slashes\1slash

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
// joint path : \test\test1\2slashes\1slash

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));
// resolve : D:\Web2\Node.js\runoob\main.js

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));
// ext name : .js