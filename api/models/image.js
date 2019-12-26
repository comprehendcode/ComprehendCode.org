var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: {type: String},
    meta: {
        date: {type: String},
    }
})

mongoose.model("Image", imageSchema);