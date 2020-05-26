var express = require('express');
var router = express.Router();

var ctrlPost= require('../controller/progress');

router.get('/progress/:title', ctrlPost.read);
router.get('/progress', ctrlPost.readAll);
router.delete('/progress/:name', ctrlPost.delete);
router.post('/progress', ctrlPost.register)
module.exports = router;