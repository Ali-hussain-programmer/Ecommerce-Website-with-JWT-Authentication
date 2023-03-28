import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Index from "./Containers/Index/Index";
import PriceProduct from "./Containers/PriceProduct/PriceProduct";
import Sign from "./Containers/Sign/Sign";
import Login from "./Containers/Login/Login";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Authenticated, Notauthenticated } from "./redux/authRed";
function App() {
  const verify = useSelector((state) => state.auth.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = async () => {
    const response = await fetch("http://localhost:5000/api/auth/verify", {
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
    return res;
  };
  useEffect(() => {
    auth()
      .then(() => {
        dispatch(Authenticated());
      })
      .catch((err) => {
        dispatch(Notauthenticated());
      });
  }, [verify]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={verify ? <Home /> : <Index />} />
        <Route path="/home" element={verify ? <Home /> : <Login />} />
        <Route path="/PriceProduct" element={<PriceProduct />}>
          <Route path=":id" element={<PriceProduct />} />
        </Route>
        <Route path="/signin" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
