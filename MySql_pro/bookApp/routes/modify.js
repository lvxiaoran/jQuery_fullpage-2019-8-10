var express = require('express');
var openDatabase = require('../module/openDatabase');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  var objs = {};
  for (var i in req.body) {
    objs = JSON.parse(i);
  }
  var name = objs.username;
  var phone = objs.phone;
  console.log('收到数据：', objs);
  //sql语句
  var sql = `select * from student where name='${name}' and phone='${phone}'`;
  var obj = {}; //响应给前端信息对象
  openDatabase(sql, function (err, data) {
    if (!err) {
      if (data.length == 0) {
        obj.msg = "验证失败！！！请填写您注册时的用户名、手机号";
        obj.code = 601;
      } else {
        obj.msg = "验证成功！！！请输入新密码";
        obj.code = 600;
        obj.name = name;
      }
    } else {
      console.log('服务器出错');
      obj.msg = "服务器出错！！";
      obj.code = 602;
    }
    res.send(JSON.stringify(obj));
  });
});

router.post('/newPwd', function (req, res, next) {
  var objs = {};
  for (var i in req.body) {
    objs = JSON.parse(i);
  }
  var name = objs.username;
  var pwd = objs.pwd;
  console.log('收到数据：', objs);
  //sql语句
  var sql = `update student set pwd='${pwd}' where name='${name}';`;
  var obj = {}; //响应给前端信息对象
  openDatabase(sql, function (err, data) {
    if (!err) {
      obj.msg = "修改成功！！！请登录";
      obj.code = 603;
      obj.pwd = pwd;
    } else {
      console.log('服务器出错');
      obj.msg = "服务器出错！！请稍后重试";
      obj.code = 604;
    }
    res.send(JSON.stringify(obj));
  });
});

module.exports = router;