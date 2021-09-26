var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Vis Food Page */
router.get('/visfood', function(req, res, next) {
  res.render('visfood');
});
/* GET Vis Food Page */
router.get('/vistrans', function(req, res, next) {
  res.render('vistrans');
});
/* GET MBTI Page */
router.get('/mbti', function(req, res, next) {
  res.render('mbti');
});
module.exports = router;
