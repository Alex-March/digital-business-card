import { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='footer-buttons'>
        <a href='https://twitter.com/AlexMarchenko_1' target={"blank"}>
          <button className='btn-foot twitter'>
            <i class='fa-brands fa-twitter fa-lg'></i>
          </button>
        </a>{" "}
        <a href='https://www.facebook.com/Oleksiy.Marchenko' target={"blank"}>
          <button className='btn-foot facebook'>
            <i class='fa-brands fa-facebook fa-lg'></i>
          </button>
        </a>{" "}
        <a href='https://www.instagram.com/oleksiy19/' target={"blank"}>
          <button className='btn-foot instagram'>
            <i class='fa-brands fa-instagram fa-lg'></i>
          </button>
        </a>{" "}
        <a href='https://github.com/Alex-March' target={"blank"}>
          <button className='btn-foot github'>
            <i class='fa-brands fa-github fa-lg'></i>
          </button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
