var mongoose = require('mongoose');
var _Post = mongoose.model("Progress");
var sanitize = require('mongo-sanitize');

var fs = require('fs');

module.exports.register = function (req, res) {
    var _post = new _Post();
    _post.name = req.body.post.name;
    _post.body.desc = req.body.post.body.desc; 
    _post.body.full_text = req.body.post.body.full_text;
    _post.body.img.data = fs.readFileSync(req.files.img.path);
    _post.body.img.contentType = 'image/png'; 
    _post.body.meta.date = str(Date().now());
    _post.body.meta.date = req.body.post.meta.author;
    _post.save((err)=>{
        if(err){
            res.status(500);
            throw err;
        }else{
            return res.status(200);
        }
    })
}
module.exports.read = function (req, res) {
    var cleanName = sanitize(req.body._Post.name);
    _Post.findOne({"name": cleanName}, (err, post)=>{
        if(err){
            return res.status(500);
        }else{
            return res.status(200).json(post);
        }
    })
}
module.exports.readAll = function (req, res) {
    _Post.find({}, (err,post)=>{
        if(err){
            return res.status(500); 
        }else{
            return res.status(200).json(post);
        }
    })
}
module.exports.delete = function (req, res) {
    var cleanName = sanitize(req.body.post.name);
    _Post.findByIdAndDelete({"name": cleanName}, (err, post)=>{
        if(err){
            return res.status(500);
        }else{
            return res.status(200).json('{"message": "The post has been deleted!"}');
        }
    })
}