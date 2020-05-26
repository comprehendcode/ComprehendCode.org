var mongoose = require('mongoose');
var Event = mongoose.model("Event");
var sanitize = require('mongo-sanitize');

module.exports.register = function (req, res) {
    var event = new Event();
    event.event_name = req.body.event_name;
    event.event_loctation = req.body.event_loctation;
    event.event_date = req.body.event_date;
    event.info.general = req.body.info.general;
    event.info.short_desc = req.body.info.short_desc;
    event.meta.signups = 0;
    event.meta.thinking_about = 0;
    guide.save((err)=>{
        if(err){
            res.status(500);
            throw err;
        }else{
            return res.status(200);
        }
    })
}
module.exports.read = function (req, res) {
    var cleanName = sanitize(req.body.event_name);
    Event.findOne({"event_name": cleanName}, (err, event)=>{
        if(err){
            return res.status(500);
        }else{
            return res.status(200).json(event);
        }
    })
}
module.exports.readAll = function (req, res) {
    Event.find({}, (err,event)=>{
        if(err){
            return res.status(500); 
        }else{
            return res.status(200).json(event);
        }
    })
}
module.exports.delete = function (req, res) {
    var cleanName = sanitize(req.body.event_name);
    Event.findByIdAndDelete({"event_name": cleanName}, (err, event)=>{
        if(err){
            return res.status(500);
        }else{
            return res.status(200).json('{"message": "The event has been deleted!"}');
        }
    })
}