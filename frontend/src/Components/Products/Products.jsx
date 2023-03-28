import React from "react";
import Productlist from "../../Containers/SingleProduct/Productlist";
import { product } from "../../Data/Data";
import card1 from "../../Images/card1.jpg";
import card4 from "../../Images/card2.jpg";
import card2 from "../../Images/z2.jpg";
import card3 from "../../Images/z1.jpg";
import "./Product.scss";
import Procard from "./Procard";

function Products() {
  return (
    <>
      <div className="latest">
        <h1>Explore Products</h1>
        <div className="product-wrapper">
          <Procard img={card1} title={"WOMEN CLOTHES"} />
          <Procard img={card2} title={"BEST FRAGNANCE "} />
          <Procard img={card3} title={"MEN CLOTHES"} />
          <Procard img={card4} title={"CASUAL CLOTHES"} />
        </div>
      </div>
    </>
  );
}

export default Products;
