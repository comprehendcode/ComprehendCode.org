var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var ctrlUploader= require('../controller/image');

router.post('image/upload', ctrlUploader.upload);
router.get('image/:name', ctrlUploader.getImage);
module.exports = router;