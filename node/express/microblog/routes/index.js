var express = require('express');
var router = express.Router();

// / ：首页
// /login ：用户登录
// /reg ：用户注册
// /post ：发表文章
// /logout ：登出

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆' });
});

router.get('/post', function(req, res, next) {
  res.render('post', { title: '发表' });
});

router.get('/login', function(req, res, next) {

});

router.get('/post', function(req, res, next) {

});

router.get('/logout', function(req, res, next) {

});

router.get('/start', function(req, res, next) {
  res.render('index', { title: 'start' });
});

router.get('/time',function(req, res, next){
    res.send(' The time is ' + new Date().toString());
});

router.get('/testM', function(req, res, next) {
  res.render('post', { title: '发表' });
});

router.get('/readme',function(req,res){
    res.send('../readme.md');
});

module.exports = router;
