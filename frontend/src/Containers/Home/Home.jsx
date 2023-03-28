import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Home.scss";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { useNavigate } from "react-router-dom";

function Home() {
  

  return (
    <>
      <div className="Home">
        <SingleProduct />
      </div>
    </>
  );
}

export default Home;
