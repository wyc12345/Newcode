var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog'
});
exports.query = function(sql,parmas,callback){

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        // var sql="indert into 表名(主键，... ，NAME) values(null, ... , NAME) ";
        var sql="indert into 表名(NAME，... ，AGE) values(?, ... , ?) ";
        //connection.query(sql [NAME, ... , AGE], function (error, results, fields) {
        connection.query(sql, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
        })

    })
}
