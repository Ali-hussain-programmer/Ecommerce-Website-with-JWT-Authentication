import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Annoucement from "../Annoucement/Annoucement";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Navbar.scss";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { Authenticated, Notauthenticated } from "../../redux/authRed";
import { setuserData } from "../../redux/userData";
import { increment } from "../../redux/cartred";

function Navbar() {
  const verify = useSelector((state) => state.auth.value);
  const profile = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  const [dis, setdis] = useState(false);
  let activeStyle = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
  };
  const navigate = useNavigate();

  const Logout = async () => {
    const response = await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const res = await response.json();
    console.log(res);
    return res;
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <>
      <div className="Navbar">
        <Annoucement />
        <div className="Navbar-inner">
          <div className="nav-left">
            <span>EN</span>
            <div className="search-icon">
              <input type="text" />
              <SearchIcon />
            </div>
          </div>
          <div className="nav-middle"></div>
          <div className={`nav-right ${verify ? "space" : null}`}>
            {verify ? null : (
              <>
                <div>
                  <NavLink
                    to={"/signin"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    REGISTER
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={"/login"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    SIGN IN
                  </NavLink>
                </div>
              </>
            )}
            {verify ? (
              <>
                <div className="profile">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar src="/broken-image.jpg" />{" "}
                  </StyledBadge>
                  <small>{profile.firstname}</small>
                </div>
                <div className="setting-icon">
                  <span
                    onClick={(e) => {
                      setdis(!dis);
                    }}
                  >
                    <SettingsIcon />
                  </span>
                  {dis ? (
                    <div
                      className="Log-out"
                      onClick={() => {
                        Logout()
                          .then(() => {
                            dispatch(Notauthenticated());
                            window.location.replace("/");
                            
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Logout
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}

            <div className="cart-icon">
              <Badge badgeContent={cart} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
