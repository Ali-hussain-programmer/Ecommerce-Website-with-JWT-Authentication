import React from "react";

function SlideItems({ title, bg,img,des,slide }) {
  return (
    <>
      <div className="Slide" style={{ backgroundColor: bg ,transform:`translateX(${slide * -105}vw)`}}>
        <div className="image-container">
          <img src={img} alt="" />
        </div>
        <div className="image-info">
          <h1>{title}</h1>
          <p>{des} </p>
          <button>SHOW NOW</button>
        </div>
      </div>
    </>
  );
}

export default SlideItems;
