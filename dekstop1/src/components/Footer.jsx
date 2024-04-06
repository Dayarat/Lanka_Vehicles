import React from 'react';
import '../styles/footer.css'; 
import Logo from '../styles/Assests/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <div className="footer-logo">
          <img src={Logo} alt="Your Logo" className="logo-img" />
        </div>
        <div className="footer-copyright">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-category">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-category">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
        <div className="footer-category">
          <h3>Stay Up to Date</h3>
          <ul>
          <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
