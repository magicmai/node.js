console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
 
(function(){
	console.log('执行一些代码中...');
})();

console.timeEnd('获取数据');

console.info("程序执行完毕。")