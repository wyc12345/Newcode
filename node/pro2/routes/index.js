//路由文件

var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/reg',User.reg);
router.post('/reg',User.do_reg)

// router.get('/reg',function(req,res,next){
//   res.send('1234')
// })

module.exports = router;




