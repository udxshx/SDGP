import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="brand">
          <h1>SisuSaviya</h1>
          <p>
            To bring quality education experience to every school in
            Sri Lanka. join hands to make a better future for our
            children.
          </p>
        </div>
        <div className="links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/past-events">Past Events</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/about">About us</a></li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <p><MdLocalPhone /> +94 11 00 000 000</p>
          <p><MdEmail /> michelle.rivera@example.com</p>
          <p><IoLocationSharp /> 2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className="social">
          <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="/" aria-label="Website"><FaGlobe /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2023 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer; 
