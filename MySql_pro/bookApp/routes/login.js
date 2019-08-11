var express = require('express');
var openDatabase = require('../module/openDatabase');
var router = express.Router();

//登录
router.post('/', function (req, res) {
    var objs = {};
    for (var i in req.body) {
        objs = JSON.parse(i);
    }
    var name = objs.username;
    var pwd = objs.pwd;
    console.log('收到数据：', objs);
    //sql语句
    var sql = `select * from student where name='${name}' and pwd='${pwd}'`;
    var obj = {}; //响应给前端信息对象
    openDatabase(sql, function (err, data) {
        if (!err) {
            if (data.length == 0) {
                obj.msg = "登陆失败！！！用户名密码错误";
                obj.code = 201;
            } else {
                obj.msg = "登陆成功！！！";
                obj.code = 200;
                obj.name = name;
            }
        } else {
            console.log('服务器出错');
            obj.msg = "服务器出错！！";
            obj.code = 202;
        }
        res.send(JSON.stringify(obj));
    });
});

module.exports = router; //暴露路由模块