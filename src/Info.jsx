import { useState } from "react";
import "./Info.css";

function Info() {
  return (
    <div className='info'>
      <img className='img-main' src='./src\assets\business_card_pic.jpeg' />
      <h1>Alex Marchenko</h1>
      <h3>Frontend Developer</h3>
      <a className='web-link' href='https://alexmarch.tech/'>
        alexmarch.tech
      </a>
      {/* buttons */}
      <div className='main-buttons'>
        <a href='mailto:omarchenko@queensu.ca'>
          <button className='btn email'>
            <i class='fa-solid fa-envelope'></i> Email
          </button>
        </a>
        <a href='https://www.linkedin.com/in/omarchenko/' target={"blank"}>
          <button className='btn linkedin'>
            <i class='fa-brands fa-linkedin'></i> LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
