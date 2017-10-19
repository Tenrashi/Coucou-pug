var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GET');
});

/* GET user with ID. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user with name. */
router.put('/:bob(\\w+)', function(req, res, next) {
  res.send('Hey my name is ' + req.params.bob);
});

/* DELETE user with ID. */
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a DELETE ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});


module.exports = router;