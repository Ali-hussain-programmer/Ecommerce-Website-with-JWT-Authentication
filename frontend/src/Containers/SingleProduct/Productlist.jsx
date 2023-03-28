import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import "./SingleProduct.scss"
function Productlist({ img, id }) {
  const navigate = useNavigate();
  const Nav = () => {
    navigate(`/PriceProduct/${id}`);
  };
  return (
    <>
      <div
        className="productlist"
        onClick={() => {
          Nav();
        }}
      >
        <img src={img} />
        <div className="icons">
          <span>
            <ShoppingCartOutlinedIcon />
          </span>
          <span>
            <FavoriteBorderOutlinedIcon />
          </span>
          <span>
            <SearchOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
}

export default Productlist;
