import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import './footer.css';

function Footer () {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Anil</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://instagram.com" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><FaFacebookSquare /></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
