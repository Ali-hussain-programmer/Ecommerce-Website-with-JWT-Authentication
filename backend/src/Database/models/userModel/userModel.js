const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt=require("bcryptjs")
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Must be required"],
    unique: true,
    validate: {
      validator:(value)=>Promise.resolve(validator.isEmail(value)) ,
      message: (props) => `Not a Valid Email ${props.value}`,
    },
  },
  password: {
    type: String,
    required: [true, "Must be required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  
},{timestamps:true});

userSchema.pre("save", async function (next) {

  if (this.isModified("password")) {

   const rounds=12
    const hash = await bcrypt.hash(this.password,rounds);
    this.password = hash;
  }

  next();
});

module.exports= new mongoose.model("User",userSchema)