var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Messages' });
});

module.exports = router;
