import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./NewsLetter.scss";
function NewsLetter() {
  return (
    <>
      <div className="NewsLetter">
        <h1>NEWS LETTER</h1>
        <p>GET TIMELY UPDATE FROM YOUR FAVOURITE PRODUCTS</p>
        <div className="input">
          <input type="text" placeholder="Your Email" />
         <span><SendIcon /></span> 
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
