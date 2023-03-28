import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Data } from "../../Data/Data";
import SlideItems from "./SlideItems";
import "./Slider.scss";
function Slider() {
  const [slide, setSlide] = useState(0);
  const handleSlide = (direction) => {
    if(direction==="left")
    {
      setSlide(slide >=2 ? 0: slide +1)
      console.log("left")
    }
    else
    {
        setSlide(slide <=0 ? 2: slide -1)
        console.log("right")
    }
  };

  return (
    <>
      <div className="Slider">
        <div
          className="Arrow ArrowRight"
          onClick={() => {
            handleSlide("right");
          }}
        >
          <ArrowBackIosIcon />
        </div>

        <div className="wrapper">
          {Data.map((e, i) => {
            return (
              <SlideItems
                key={i}
                title={e.title}
                bg={e.bg}
                des={e.des}
                img={e.img}
                slide={slide}
              />
            );
          })}
        </div>

        <div
          className="Arrow ArrowLeft"
          onClick={() => {
            handleSlide("left");
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
}

export default Slider;
