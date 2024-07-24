import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
 

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anilpatil@gmail.com</h5>
            <a href="mailto:anilpatil@gmail.com">Send a message</a>
          </article>
        </div>
        <form >
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <span>Thanks, I'll reply ASAP </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
