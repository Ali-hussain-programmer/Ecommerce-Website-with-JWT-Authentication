import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../Data/Data";
import "./PriceProduct.scss";
import Card from "./Card";
function PriceProduct() {
  const { id } = useParams();
  const [data, setData] = useState("");
  console.log(id);
  return (
    <>
      <div className="PriceProduct">
        {product.map((curr, i) => {
          if (curr.id == id) {
            return (
              <Card
                key={curr.id}
                img={curr.img}
                id={curr.id}
                title={curr.title}
                price={curr.price}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default PriceProduct;
