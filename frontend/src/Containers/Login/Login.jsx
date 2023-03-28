import React, { useState } from "react";
import Svg from "../Svg";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { Authenticated, Notauthenticated } from "../../redux/authRed";
import "./Login.scss";
import { setuserData } from "../../redux/userData";
function Login() {
 
  const dispatch = useDispatch();
  const [data, setdata] = useState({ email: "", password: "" });
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const verify = useSelector((state) => state.auth.value);
  const proceed = async (e) => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    if (!response.ok) {
      seterror(true);
      throw new Error(response.status);
    }
    const res = await response.json();
    console.log(res)
    return res;
  };
  const handle = (e) => {
    const { value, name } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="login">
        <div className="login-inner">
          <div className="login-header">
            <div>
              <Svg />
            </div>
            <div>
              <div className="sign-title">Sign in</div>
            </div>
            <div>Use your Google Account</div>
          </div>

          <div className="login-content">
            <div className="login-email">
              <TextField
                id="outlined-basic"
                label="Email or phone"
                size="large"
                value={data.email}
                fullWidth
                onChange={handle}
                name="email"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">@gmail.com</InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="login-password">
              <TextField
                id="outlined-basic"
                label="Password"
                fullWidth
                value={data.password}
                name="password"
                size="large"
                variant="outlined"
                onChange={handle}
                type="password"
              />
              <div className="forgot-password">Forgot Password ?</div>
            </div>

            <div className="login-help">
              <p>Not your computer? Use Guest mode to sign in privately.</p>
              <span>Learn more</span>
            </div>
            <div className="buttons">
              <p
                className="current-email"
                style={{ fontSize: "0.8rem", fontWeight: "bold" }}
              >
                <Link to={"/signin"}>Create Account</Link>
              </p>
              <Button
                variant={loading ? "outlined" : "contained"}
                onClick={() => {
                  proceed()
                    .then((res) => {
                      
                        dispatch(setuserData(res))
                        setLoading(false);
                        dispatch(Authenticated());
                        
                        navigate("/home", { replace: true })
                        
                      
                    })
                    .catch((err) => {
                      setLoading(false);

                      setdata({ email: "", password: "" });
                    });
                }}
              >
                {loading ? <CircularProgress size={25} /> : "Sign In"}
              </Button>
            </div>
            <div className="errors">
              {error ? "Invalid Email and Password" : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
