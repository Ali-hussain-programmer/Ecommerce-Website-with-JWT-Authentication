import React from "react";
import "./Categories.scss";
function CategoryItems({ title, img }) {
  return (
    <>
      <div className="CategoryItems">
        <img src={img} />
        <div className="category-info">
          <h1>{title}</h1>

          <button>SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default CategoryItems;
