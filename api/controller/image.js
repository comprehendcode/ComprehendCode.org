var mongoose = require('mongoose');
var image = mongoose.model('Image');
var multer = require('multer');
var fs = require('fs');
var DIR = './uploads/';
 
var upload = multer({dest: DIR});

module.exports.upload = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
          return res.status(500).json({"Message": "Image Upload failed"});
        } 
        res.status(200);
      });
};
module.exports.getImage = function (req, res) {
    


};