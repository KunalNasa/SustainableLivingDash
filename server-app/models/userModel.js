const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "please add the username"]
        },
        email : {
            type : String,
            required : [true, "Please add your email"],
            unique : [true, "Email address already taken"]
        },
        password : {
            type : String,
            required : [true, "Please enter your password"],

        }
    },
    {
    timestamps : true,
    }
)
module.exports = mongoose.model("UserModel", userSchema);