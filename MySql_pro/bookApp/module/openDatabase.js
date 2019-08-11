var mysql = require('mysql');
var Config = require('../module/config');

function openDatabase(sql, fn) {
    var conn = mysql.createConnection({
        host: Config.host,
        user: Config.user,
        password: Config.password,
        database: Config.database
    });
    conn.connect();
    conn.query(sql, function (err, data) {
        fn(err, data)
    });
    conn.end();
}

// openDatabase('sql语句',function(err,data){

// });
module.exports = openDatabase;