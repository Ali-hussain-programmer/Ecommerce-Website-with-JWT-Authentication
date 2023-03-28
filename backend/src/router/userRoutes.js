const router = require("express").Router();
const User = require("../Database/models/userModel/userModel");
const bcrypt = require("bcryptjs");
const verifyToken= require("../Middleware/verifyToken");
const  cookieParser = require('cookie-parser')
router.use(cookieParser())
router.put("/:id", verifyToken, async (req, res) => {
  try {
    
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateduser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
