import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://instagram.com" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><FaFacebookSquare /></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer" ><FaGithub /></a>
      
    </div>
  )
}

export default HeaderSocials