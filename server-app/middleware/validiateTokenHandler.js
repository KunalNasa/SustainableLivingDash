const jwt = require('jsonwebtoken')
const validiateToken = async (req, res, next) => {
    try {
        let token;
        const authHeader = req.headers.Authorization || req.headers.authorization
        if(authHeader && (authHeader.startsWith("Bearer")))
        {
            token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, 
                (err, decoded) => {
                    if(err)
                    {
                        res.status(400).send({message : "User is not authorized"})
                    }
                    else
                    {
                        req.user = decoded.user;
                        next();
                    }
                    if(!token)
                    {
                        res.status(401).send({message : "User is not authorized or token is invalid"})
                    }
                })
        }
        else{
            res.status(404).send({message: "Token Not found"})
        }
        
    } catch (error) {
        res.status(500).send({message: "Internal server Error"}) 
    }
   
}
module.exports = validiateToken