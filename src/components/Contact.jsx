import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="containar contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
          {/* <a href="https://www.google.com" target="blank" className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://www.google.com" target="blank" className="items">
            <FaFacebook className="icons" />
          </a> */}
          <a  href="https://www.linkedin.com/checkpoint/lg/login-submit" target="blank"className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a  href="https://github.com/rajesh8707" target="_blank"className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a  href="mailto:rajesh2000alld@gmail.com" target="_blank"className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact