var express = require('express');
//1.导入mysql模块
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/database', function (req, res, next) {
  //连接mysql数据库
  //2.创建连接
  var conn = mysql.createConnection({
    host: "localhost", //本地数据库
    user: "root", //数据库管理用户名
    password: "root", //数据库管理密码
    database: "person" //连接的数据库名字
  });
  //3.连接数据库
  conn.connect();
  //4.查询数据库
  //定义mysql语句
  var sql = "select * from student";
  var data; //定义查询到的数据
  conn.query(sql, function (err, result, feild) {
    if (!err) {
      console.log('database select succeed', result);
      data = result;
      for(var i in data){
        console.log(data[i].name)
      }
      res.send('ok');
    } else {
      console.log('database select defeate', err.message)
    }
  })
  
  // res.send(JSON.stringify(data));//因为conn.query()是异步，所以要提前
  //5.断开数据库连接
  conn.end();
});

module.exports = router;