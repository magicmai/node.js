var fs = require('fs');
var iconv = require('iconv-lite');

// 1.阻塞(se)代码实例
// var fileStr = fs.readFileSync('input.txt', {encoding:'binary'});
// var buf = new Buffer(fileStr, 'binary');
// var str = iconv.decode(buf, 'gbk');
// console.log(str.toString());
// console.log("程序执行结束!");


// 2.非阻塞(se)代码实例
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    else {
		var str = iconv.decode(data, 'gbk');
    	console.log(str.toString()); 	
    }
});

console.log("程序执行结束!");