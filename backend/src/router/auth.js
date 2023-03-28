const router = require("express").Router();
const User = require("../Database/models/userModel/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken= require("../Middleware/verifyToken");
const dotenv = require("dotenv");
const  cookieParser = require('cookie-parser')
router.use(cookieParser())
dotenv.config();
router.post("/register", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const response = await newUser.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const Match = await bcrypt.compare(password, user.password);;
    if (Match) {
      const accessToken = jwt.sign(
        {
      
          isAdmin: user.isAdmin,
        },
        process.env.JWT_KEY,
        {expiresIn:"3d"}
      );
  
      const {...other}=user._doc
    
      
      res.cookie("token", accessToken, {
        maxAge: new Date(Date.now() + 25892000000),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      console.log(accessToken)
     
      res.status(200).send(other);
    } else {
      res.status(404).json("Wrong Credentials");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/verify", verifyToken, (req, res) => {
  res.status(200).send("200");
}); 
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).send("200");
});

module.exports = router;
