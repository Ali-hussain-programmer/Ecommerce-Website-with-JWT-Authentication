import React from "react";
import "./Product.scss";
function Procard({ img, title }) {
  return (
    <>
      <div className="procard">
        <div className="pro-img">
          <img src={img} />
        </div>
        <h2>{title}</h2>
      </div>
    </>
  );
}

export default Procard;
