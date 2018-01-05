var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
    host    : 'localhost',       
    user    : 'root',              
    password: '',       
    port    : '3306',                   
    database: 'info', 
}); 
 
connection.connect();
 

// var  sql = 'SELECT * FROM test';
// //查
// connection.query(sql, function (err, result) {
//     if(err) {
//         console.log('[SELECT ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');  
// });


// var  addSql = 'INSERT INTO test(id,name,num,price) VALUES(3,?,?,?)';
// var  addSqlParams = ['龙眼', 15, 0];
// //增
// connection.query(addSql, addSqlParams, function (err, result) {
//     if(err) {
//         console.log('[INSERT ERROR] - ', err.message);
//         return;
//     }        

//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:', result.insertId);        
//     console.log('INSERT ID:', result);
//     // INSERT ID: OkPacket {
//     //     fieldCount: 0,
//     //     affectedRows: 1,
//     //     insertId: 0,
//     //     serverStatus: 2,
//     //     warningCount: 0,
//     //     message: '',
//     //     protocol41: true,
//     //     changedRows: 0 }      
//      console.log('-----------------------------------------------------------------\n\n');  
// });


// var modSql = 'UPDATE test SET name = ?,num = ? WHERE id = ?';
// var modSqlParams = ['榴莲', 1, 4];
// //改
// connection.query(modSql, modSqlParams, function (err, result) {
//     if(err) {
//         console.log('[UPDATE ERROR] - ', err.message);
//         return;
//     }        
//     console.log('--------------------------UPDATE----------------------------');
//     console.log('UPDATE affectedRows', result.affectedRows);
//     console.log('-----------------------------------------------------------------\n\n');
// });
 

var delSql = 'DELETE FROM test where id = 4';
//删
connection.query(delSql, function (err, result) {
    if(err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }        

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');  
});


connection.end();