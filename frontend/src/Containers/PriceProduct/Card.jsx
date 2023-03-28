import React, { useState } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./PriceProduct.scss";
import ShopIcon from "@mui/icons-material/Shop";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/cartred";
function Card({ img,title,price ,id}) {
  
  const [Quantity, setQuantity] = useState(0);
  const profile = useSelector((state) => state.user.value);
  const cartget=async()=>
  {
    const response=await fetch("http://localhost:5000/api/cart/get",{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        userId: profile._id,
      })
    })
  }
  const dispatch = useDispatch();
  const cartadd = async () => {
    const response = await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        userId: profile._id,
        products:{productId:id,Quantity:Quantity,title:title,price:price}
       ,
      }),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const res = await response.json();
    return res;
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <div className="card-des">
          Gildan Men's Crew T-Shirts, Multipack, Style G1100 Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Odio cum doloribus placeat
          sunt consequuntur deleniti similique dolorum accusantium, porro ipsam
          aperiam dolorem laudantium esse id suscipit voluptatum et laboriosam
          itaque!
        </div>
        <div className="card-price">
          <h2>
            USD :  <span>{price}$</span>
          </h2>
        </div>
        <div className="Quantity">
          <h3>Quantity:</h3>
          <span onClick={()=>{setQuantity(Quantity+1)}}>+</span>
          {Quantity} <span onClick={()=>{setQuantity(Quantity-1)}}>-</span>
        </div>
        <div className="card-buttons">
          <Button variant="contained" startIcon={<ShoppingCartIcon />}   onClick={() => {
                cartadd()
                  .then(() => {
                    cartget().then((res)=>{console.log(res)})
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}>
            Add To Cart
          </Button>
          <Button variant="contained" startIcon={<ShopIcon />}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
