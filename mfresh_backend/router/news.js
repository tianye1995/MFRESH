/*
包含“新闻”相关的所有路由
 */
const express = require('express');
const pool = require('../pool');
let router = express.Router();
module.exports = router;

/**
 *按发布时间逆序返回新闻列表
 *GET  /news/list/3
 *请求参数：
  pageNum-需显示的页号；默认为1
 *输出结果：
 {
   totalRecord: 24,
   pageSize: 5,
   pageCount: 5,
   pageNum: 3,
   data: [{},{} ... {}]
 }
 */
router.get('/list/:pageNum', (req, res)=>{
  //读取请求数据
  let pageNum = req.params.pageNum;
  //输出响应消息
  let pager = {       //分页器对象
    totalRecord: 0,       //总的记录数
    pageSize: 5,          //页面大小
    pageCount: 0,         //总页数
    pageNum: parseInt(pageNum), //当前显示的页号
    data: []              //当前页中的数据
  };
  pool.query("SELECT COUNT(*) AS c FROM mf_news", (err, result)=>{
    if(err)throw err;
    pager.totalRecord = result[0]['c'];//总记录数
    pager.pageCount = Math.ceil(pager.totalRecord/pager.pageSize);//总页数
    pool.query("SELECT nid,title,pubTime FROM mf_news ORDER BY pubTime DESC LIMIT ?,?",[(pager.pageNum-1)*pager.pageSize,  pager.pageSize], (err, result)=>{
      if(err)throw err;
      pager.data = result;//查询到的数据:二维数组
      res.json(pager);//向客户端输出响应消息
    });
  });

});

/**
 *根据新闻ID返回新闻详情
 * GET  /news/10    RESTful风格
 * ////GET  /news?nid=10    req.query.nid//////
 *请求参数：
 nid-新闻ID，必需
 *输出结果：
 {
   "nid": 10,
   ...
 }
 */
router.get('/:nid', (req, res)=>{
  //读取请求数据(路由参数Parameters)
  let nid = req.params.nid;
  //输出响应消息
  pool.query('SELECT * FROM mf_news WHERE nid=?', [nid], (err, result)=>{
    if(err)throw err;
    let news = result[0];
    res.json(news);
  });
})