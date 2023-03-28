import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="desc">
          <h2>DEV MASTER</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eum
            natus accusantium, ex maiores nesciunt quisquam sapiente voluptatum
            corporis perspiciatis eligendi ad repellat vitae provident quibusdam
            incidunt placeat harum rerum?
          </p>
          <div className="social-icons">
            <span className="facebook">
              <FacebookIcon />
            </span>
            <span className="instagram">
              <InstagramIcon />
            </span>
            <span className="twitter">
              <TwitterIcon />
            </span>
            <span className="pinterest">
              <PinterestIcon />
            </span>
          </div>
        </div>
        <div className="Links">
          <h2>Useful Links</h2>
          <div className="links-items">
            <ul>
              <li>Home</li>
              <li>Man Fashion </li>
              <li>Accessories</li>
              <li>Order Tracking </li>
              <li>Wishlist</li>
            </ul>
            <ul>
              <li>Cart</li>
              <li>Woman Fashion</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <div>
            <LocationOnIcon />
            <span> 622 Dixie path.South Tobincher 984848</span>
          </div>
          <div>
            <LocalPhoneIcon />
            <span>+923094189983</span>
          </div>
          <div>
            <EmailIcon />
            <span>contact@sufyanahmed dev</span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
