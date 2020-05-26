var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    event_name: { 
        type: String, 
        required: true
    },
    event_location:{
        type: String,
        required: true
    },
    event_date:{
        type: String, 
        required: true,
    },
    info: {
        general:{
            type: String
        },
        short_desc:{
            type: String
        }
    },
    meta:{ 
        signups: {
            type: Number
        },
        thinking_about: {
            type: Number
        }
    }

})

mongoose.model("Event", eventSchema);