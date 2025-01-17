const mongoose = require('mongoose')

const tipsSchema = mongoose.Schema({
     title : {
        type : String,
        required : true
     },
     content : {
        type : String,
        required : true
     }
    },
    {
        timestamps : true
    } 
)

module.exports = mongoose.model("tipsModel",tipsSchema);