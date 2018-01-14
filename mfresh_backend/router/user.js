/*
包含“用户”相关的所有路由
 */
const express = require('express');
let router = express.Router();
module.exports = router;

/*
*处理客户端的登录请求
*POST  /user/login
*请求参数：
  unameOrPhone-用户名或密码
  upwd-密码
*输出结果：
* {"code":200,"uid":1,"uname":"test","phone":"13012345678"}
* 或
* {"code":400}
*/
router.post('/login', (req, res)=>{
  //读取请求数据
  //返回响应消息
  let result = {code: 400};
  res.json(result);
});

/*
*注册新用户
*POST  /user/register
*请求参数：
  uname-用户名
  upwd-密码
  phone-电话号码
*输出结果：
* {"code":200,"uid":3,"uname":"test"}
* 或
* {"code":500}
*/
router.post('/register', (req, res)=>{
  //读取请求数据
  //返回响应消息
  let result = {code: 500};
  res.json(result);
});

/*
*验证用户名是否已经存在
* GET /user/check/uname
*请求参数：
  uname-用户名
*输出结果：
* {"code":200,"msg":"exist"}  存在
* 或
* {"code":400,"msg":"non-exist"}  不存在
*/
router.get('/check/uname', (req, res)=>{
  //读取请求数据
  //返回响应消息
  let result = {code: 400, msg: 'non-exist'};
  res.json(result);
});

/*
*验证电话号码是否已经存在
*GET /user/check/phone
*请求参数：
  phone-电话号码
*输出结果：
* {"code":200,"msg":"exist"}
* 或
* {"code":400,"msg":"non-exist"}
*/
router.get('/check/phone', (req, res)=>{
  //读取请求数据
  //返回响应消息
  let result = {code: 400, msg: 'non-exist'};
  res.json(result);
});