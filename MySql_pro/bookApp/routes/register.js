var express = require('express');
var mysql = require('mysql');
var Config = require('../module/config');
var openDatabase = require('../module/openDatabase');
var router = express.Router();

//注册
router.post('/', function (req, res, next) {
    var objs = {}; //保存前端传来的数据信息
    for (var i in req.body) {
        objs = JSON.parse(i);
    }
    var name = objs.username;
    var pwd = objs.pwd;
    var phone = objs.phone;
    var email = objs.email;
    var sex = objs.sex;
    console.log('收到数据：', objs);
    //sql语句
    var sql1 = `insert into student (name,pwd,phone,email,sex) values ('${name}','${pwd}','${phone}','${email}','${sex}');`;
    var sql2 = `select name from student where name='${name}';`;

    console.log(sql1)
    console.log(sql2)

    //1.创建连接
    var conn = mysql.createConnection({
        host: Config.host,
        user: Config.user,
        password: Config.password,
        database: Config.database
    });
    //2.建立连接
    conn.connect();
    //3.访问数据库
    var obj = {};
    conn.query(sql2, function (err, data) {
        if (!err) {
            console.log('数据库访问成功！', data);
            if (data.length === 0) {
                //调用函数
                function senObj(fn) {
                    openDatabase(sql1, function (err, data) {
                        if (!err) {
                            obj.msg = "注册成功,请登录！！！";
                            obj.code = 100;
                            obj.data = data;
                        } else {
                            obj.msg = "注册失败，请稍后重试！！！";
                            obj.code = 102;
                            console.log(err)
                        }
                        fn(obj);
                    });
                }
            } else {
                function senObj(fn) {
                    obj.msg = "用户名已存在";
                    obj.code = 101;
                    fn(obj);
                }
            }
        } else {
            console.log('数据库访问失败:', err.message);
        }

        senObj(obj => {
            res.send(JSON.stringify(obj));
        })
    })
    // 释放链接
    conn.end();
});


module.exports = router;

