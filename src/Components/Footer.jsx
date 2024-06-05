
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white p-4 gap-2 h-300 mt-2">
      <div className="container mx-auto text-center gap-2">
       <footer className="footer p-10 bg-base-300 text-base-content">
  <nav >
    <h6 className="footer-title ">Services</h6> 
    <a className="link link-hover pl-3">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
 
</footer>
      </div>
    </footer>
  );
};

export default Footer;
