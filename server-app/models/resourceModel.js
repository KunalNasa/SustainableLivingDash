const mongoose = require('mongoose')

const resourceSchema = mongoose.Schema({
     title : {
        type : String,
        required : true
     },
     description : {
        type : String,
        required : true
     },
     URL : {
        type : String,
        required : true,
     }
    },
    {
        timestamps : true
    } 
)

module.exports = mongoose.model("resourceModel",resourceSchema);