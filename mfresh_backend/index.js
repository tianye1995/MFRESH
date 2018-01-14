const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routerNews = require('./router/news');
const routerUser = require('./router/user');

let app = express();
http.createServer(app).listen(3000);

//使用第三方中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors({
  origin: ['http://127.0.0.1', 'http://localhost', 'http://127.0.0.1:8080', 'http://localhost:8080'],
  methods: ['PUT','DELETE','GET','POST']
}));

//路由器
app.use('/news', routerNews);
app.use('/user', routerUser);

