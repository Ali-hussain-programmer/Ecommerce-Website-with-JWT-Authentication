import React from "react";
import "./Categories.scss";
import CategoryItems from "./CategoryItems";
import { category } from "../../Data/Data";
function Categories() {
  return (
    <>
      <div className="wrapper-category">
        <h1>Category</h1>
        <div className="category">
          {category.map((c, index) => {
            return <CategoryItems key={index} title={c.title} img={c.img} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
