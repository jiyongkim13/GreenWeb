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

/* Router TEST */
router.get('/test', function(req, res, next) {
  console.log("테스트완료");
  res.json({
    message: "response완료",
  });
});

router.post('/test2', function(req, res, next) {
  res.json({
    message: "post완료",
  });
});


module.exports = router;
