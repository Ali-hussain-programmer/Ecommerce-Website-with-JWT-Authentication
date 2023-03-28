import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import pic from "../../Images/pic.jpg"
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import validator from "validator";
import { FormGroup } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.scss";
import Svg from "../Svg";

export default function Sign() {
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [err, seterr] = useState(false);
  const [fetchError,setfetchError]=useState(false)
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: {
      value: "",
      errormsg: "Characters must be of length 3",
      err: false,
    },
    lastname: {
      value: "",
      errormsg: "Characters must be of length 5",
      err: false,
    },
    email: {
      value: "",
      errormsg: "Please Enter Valid email",
      err: false,
    },
    password: {
      value: "",
      errormsg: "Password must be of length 8",
      err: false,
    },
    confirmpassword: {
      value: "",
      errormsg: "Password doesnt match",
      err: false,
    },
  });

  const HandleChange = (e) => {
    setShowPassword(e.target.checked);
  };
  const post = async () => {
    setloading(true);
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: values.firstname.value,
        lastname: values.lastname.value,
        email: values.email.value,
        password: values.password.value,
      }),
    });
    console.log(response)
    console.log(response.status)
    if(!response.ok)
    {
      setfetchError(true)
      throw new Error(response.statusText)
    }


    const res = await response.json();
    return res;
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: { ...prev[name], value: value } };
    });
    validation(name, value);
  };
  const validation = (name, value) => {
    if (values[name] === values.firstname) {
      if (value.length > 5) {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: true } };
        });
      } else {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: false } };
        });
      }
    }
    if (values[name] === values.lastname) {
      if (value.length > 5) {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: true } };
        });
      } else {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: false } };
        });
      }
    }
    if (values[name] === values.email) {
      if (validator.isEmail(value.toString())) {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: false } };
        });
      } else {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: true } };
        });
      }
    }
    if (values[name] === values.password) {
      if (value.length > 8) {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: true } };
        });
      } else {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: false } };
        });
      }
    }
    if (values[name] === values.confirmpassword) {
      console.log(values.confirmpassword.value, values.password.value);
      if (value === values.password.value) {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: false } };
        });
      } else {
        setValues((prev) => {
          return { ...prev, [name]: { ...prev[name], err: true } };
        });
      }
    }
  };
  const action = (e) => {
    if (
      values.confirmpassword.value === "" ||
      values.password.value === "" ||
      values.email.value === "" ||
      values.firstname.value === "" ||
      values.lastname.value === ""
    ) {
      seterr(true);
    } else {
      post().then((res) => {
        
        setTimeout(()=>{
          setloading(false);
          navigate("/login")
        },1000)
      }).catch((err)=>{ setloading(false);console.log(err)})
    }
  };

  return (
    <>
      <div className="sign">


        <div className="sign-inner">
        <div className="alert">
          {err ? (
            <Collapse in={err}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      seterr(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Please Fill All Fields!!
              </Alert>
            </Collapse>
          ) : null}
        </div>
          <div className="sign-content">
            <div className="logo-google">
              <Svg />
            </div>
            <p className="create-account-heading">Create Your Google Account</p>
            <div className="sign-inputs">
              <div>
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                  value={values.firstname.value}
                  name="firstname"
                  error={values.firstname.err}
                />
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  size="small"
                  variant="outlined"
                  name="lastname"
                  onChange={handleChange}
                  value={values.lastname.value}
                  error={values.lastname.err}
                />
              </div>
              <span className="error">
                {values.firstname.err
                  ? values.firstname.errormsg
                  : values.lastname.err
                  ? values.lastname.errormsg
                  : null}
              </span>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  size="small"
                  placeholder="Enter your Email"
                  fullWidth
                  name="email"
                  onChange={handleChange}
                  value={values.email.value}
                  helperText="You can use letters,number & periods"
                  variant="outlined"
                  error={values.email.err}
                  className="email"
                  
                />
              </div>
              <span className="error">
                {values.email.err ? values.email.errormsg : null}
                {fetchError ? "This Email Already Exists" : null}
              </span>
              <div className="current-email">
                use my Current email address instead
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  size="small"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.password.value}
                  error={values.password.err}
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  size="small"
                  variant="outlined"
                  name="confirmpassword"
                  onChange={handleChange}
                  value={values.confirmpassword.value}
                  error={values.confirmpassword.err}
                  type={showPassword ? "text" : "password"}
                />
              </div>
              <span className="error">
                {values.password.err
                  ? values.password.errormsg
                  : values.confirmpassword.err
                  ? values.confirmpassword.errormsg
                  : null}
              </span>
            </div>
            <div className="symbol">
              Use 8 or more characters with a mix of letters, numbers &amp;
              symbols
            </div>
            <div className="radio-button">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Show Password"
                  onChange={HandleChange}
                />
              </FormGroup>
            </div>
            <div className="buttons">
              <p
                className="current-email">
                <Link to={"/login"}>Sign in</Link>
              </p>
              <Button
                variant={loading ? "outlined" : "contained"}
                onClick={() => {
                  action();
                }}
              >
                {loading ? <CircularProgress size={25} /> : "Next"}
              </Button>
            </div>
          </div>

          <div className="sign-logo">
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt=""
              width="244"
              height="244"
              class="j9NuTc TrZEUc"
            />
            <span>One Account. All of Google Working for you</span>
          </div>
         
        </div>
      </div>
    </>
  );
}
