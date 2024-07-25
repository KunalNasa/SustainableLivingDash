const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password)
        {
            return res.status(400).send({message : "Please enter valid credentials"})
        }
        const findMail = await userModel.findOne({email});
        if(findMail)
        {
            return res.status(400).send({message : "Email is already in use"})
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            username,
            email, 
            password : hashedPass
        })
        if(user)
        {
            res.status(201).send({_id : user.id, email : user.email})
        }
        else{
            res.status(400).send({message : "User data not valid"});
        }

    } catch (error) {
        res.status(500).send({message : "Internal server error"})
    }
}
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password)
        {
            res.status(400).send("Please provide all credentials");
        }
        const findUser = await userModel.findOne({email});
        if(findUser && (await bcrypt.compare(password, findUser.password)))
        {
            const accessToken = jwt.sign({
                // this information will be sent in req header
                // so use user instead of findUser
                user : {
                    username : findUser.username,
                    email : findUser.email,
                    id : findUser.id,
                },
            }, process.env.ACCESS_TOKEN_SECRET,
            {expiresIn : "30m"})
            res.status(200).send({accessToken})
        }
        else
        {
            res.status(400).send({message : "Email or password is not valid"});
        }
    } catch (error) {
        res.status(500).send({message : "Internal server error"});
    }
}
const getUserInfo = async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

module.exports = {registerUser, loginUser, getUserInfo}