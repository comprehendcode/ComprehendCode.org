var mongoose = require('mongoose');

var progressPost = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    body: {
        desc:{
            type: String
        },
        full_text: {
            type: String
        },
        img_name: {
            type: String
        }
    },
    meta: {
        date: {
            type: String
        },
        author: {
            type: String
        }
    }
})

mongoose.model("Progress", progressPost);