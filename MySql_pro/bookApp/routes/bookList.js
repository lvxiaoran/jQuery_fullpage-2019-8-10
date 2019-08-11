var express = require('express');
var openDatabase = require('../module/openDatabase');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //定义sql语句
  console.log('huoqu',req.query.cid);
  var sql = `select * from book_list where cid='${req.query.cid}';`; //查询书籍类型
  var obj = {}; //将信息响应给前端的对象
  openDatabase(sql, function (err, data) {
    if (!err) {
      obj.msg = "获取成功"
      obj.code = 300;
      obj.data = data;
    } else {
      console.log("系统出错！！！。。。")
      obj.msg = "服务器出错！！！";
      obj.code = 301;
    }
    res.send(JSON.stringify(obj));
  });
});

module.exports = router;