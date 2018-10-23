const express = require('express');
const app = express();
const request = require('request');
const path = require('path'); //引入path模块,该模块包括了一些处理文件路径的功能
app.use(function (req, res, next) {
  // 设置请求头为允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 设置服务器支持的所有头信息字段
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  // 设置服务器支持的所有跨域请求的方法
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  // next()方法表示进入下一个路由
  if (req.method == 'OPTIONS') res.send(200); //让options请求快速返回
  else next();
});
app.use(express.static(path.join(__dirname, '../dist')));//设置静态文件目录
/*app.get('/', function (req, res) {
  res.redirect('/zhihu');
});*/
//获取最新的日报新闻数据
app.get('/zhihu',function (req,res) {
  request('http://news-at.zhihu.com/api/4/news/latest',function (error,response,body) {
    res.send(body);
  })
});

//获取过往的日报新闻数据
app.get('/zhihu/before_news/:date',function (req,res) {
  request(`http://news-at.zhihu.com/api/4/news/before/${req.params.date}`,function (error, response, body) {
    res.send(body);
  })
});
//获取新闻详情页数据
app.get('/zhihu/news_detail/:id',function (req,res) {
  request(`http://news-at.zhihu.com/api/4/news/${req.params.id}`,function (error,response,body) {
    res.send(body);
  })
});
//获取新闻详情页额外数据
app.get('/zhihu/news_detail_extra/:id',function (req,res) {
  request(`http://news-at.zhihu.com/api/4/story-extra/${req.params.id}`,function (error,response,body) {
    res.send(body);
  })
});
//获取侧边栏主题名称
app.get('/zhihu/themes_name_list',function (req,res) {
  request(`http://news-at.zhihu.com/api/4/themes`,function (error,response,body) {
    res.send(body);
  })
});

//获取侧边栏主题对应的列表数据
app.get(`/zhihu/theme_list/:id`,function (req,res) {
  request(`http://news-at.zhihu.com/api/4/theme/${req.params.id}`,function (error,response,body) {
    res.send(body);
  })
});

/*app.all('*', function (req, res) {
  res.send('404');
});*/

app.listen(8888);

