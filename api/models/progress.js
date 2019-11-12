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
        img: {
            // large grid format i think 
            data:{
                type: Buffer
            },
            contentType: {
                type: String
            }
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