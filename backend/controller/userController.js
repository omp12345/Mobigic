const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { blacklist } = require('../blacklist');


// Controller for user registration

exports.registerUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(201).json({ message: 'User already exists' });
    }

    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username,  password: hashedPassword });
    await user.save();
    res.status(201).json({ message: `${username} registration is successful`,registerdata:req.body });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for user login
exports.loginUser = async (req, res) => {
  try {
    const {username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id,username: username}, process.env.SECRET_KEY,{expiresIn:"1h"});
    res.status(200).json({ token:token,msg:"Login Succersfully" });
   
  } catch (error) {
    res.status(500).json({ message: 'Failed to authenticate' });
  }
};

// controller for user logout
exports.logoutuser=(req,res)=>{
  const token = req.headers.authorization?.split(" ")[1]
try {
if(token)
blacklist.push(token)
   res.status(200).json({msg:"the user has been logged out"})
} catch (error) {
    res.status(400).json({err:error.message})
} 
}