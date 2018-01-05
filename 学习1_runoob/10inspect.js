// util.inspect(object,[showHidden],[depth],[colors])
// 是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。
// 它至少接受一个参数object，即要转换的对象。

var util = require('util'); 
function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    	return this.name; 
    }; 
} 
var obj = new Person(); 

console.log(util.inspect(obj));
// Person { name: 'byvoid', toString: [Function] } 

console.log(util.inspect(obj, true));
/*
Person {
  name: 'byvoid',
  toString:
   { [Function]
     [length]: 0,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } } } 
*/