const { blacklist } = require("../blacklist");
const jwt=require("jsonwebtoken")
require("dotenv").config()

//  user authenticate by jsonwebtoken and handling blacklisted of user

const auth = (req, res, next) => {

  const bolcktoken=req.headers.authorization?.split(" ")[1]
  // for logout middleware
  if(blacklist.includes(bolcktoken)){
      next() 
  }
  // for authorization middleware
    try {
      console.log(req.file)
      const token = req.headers.authorization.split(' ')[1];
   
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
     console.log(decodedToken)
    //  manipulating the req.body by userId and username for relationsip between user_route and file_route
      req.body.userId = decodedToken.userId ;
      req.body.username=decodedToken.username
      next();
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
 
 
  
  module.exports={
   auth
  }
