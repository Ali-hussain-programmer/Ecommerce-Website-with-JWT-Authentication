import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import "./Index.scss";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { useNavigate } from "react-router-dom";

function Index() {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();
  const proceed = async () => {
    const response = await fetch("http://localhost:5000/api/auth/home", {
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
  useEffect(() => {
    proceed()
      .then((res) => {
        setAuth(false);
        navigate("/home");
      })
      .catch((err) => {
        setAuth(true);
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="Index">
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
      </div>
    </>
  );
}

export default Index;
