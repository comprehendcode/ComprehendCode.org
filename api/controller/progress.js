var mongoose = require('mongoose');
var _Post = mongoose.model("Progress");
var sanitize = require('mongo-sanitize');

module.exports.register = function (req, res) {
    var _post = new _Post();    
    _post.name = req.body.name;
    _post.body.desc = req.body.body.desc; 
    _post.body.full_text = req.body.body.full_text;    
    _post.body.img_name = req.body.body.img_name;
    _post.meta.date = req.body.meta.date;
    _post.meta.author = req.body.meta.author;
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
    var cleanName = sanitize(req.body.name);
    _Post.findOne({"name": cleanName}, (err, post)=>{
        if(err){
            return res.status(500);
        }else{
            return res.status(200).json(post);
        }
    })
}
module.exports.readAll = function (req, res) {
    _Post.find((err,post)=>{
        console.log("here")
        if(err){
            return res.status(500); 
        }else{
            return res.status(200).json(post);
        }
    })
}
module.exports.delete = function (req, res) {
    var cleanName = sanitize(req.body.name);
    _Post.findByIdAndDelete({"name": cleanName}, (err, post)=>{
        if(err){
            return res.status(500);
        }else{
            return res.status(200).json('{"message": "The post has been deleted!"}');
        }
    })
}