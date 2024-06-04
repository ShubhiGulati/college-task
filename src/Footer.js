import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2 className="footer-logo">
            LOGO<span style={{ color: '#00bfa5' }}>HERE</span>
          </h2>
          <p>
            Proofers offer a wide variety of tailor-made services to meet your individual needs. Proofers offer a number of core services which include proofreading and copy-editing (thesis, dissertations, essays reports), document formatting and plagiarism.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/submit-order">Submit Order</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe Newsletter</h3>
          <form action="/subscribe">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">
              <i className="arrow">→</i>
            </button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright: © 2022 | All Rights Reserved</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-conditions">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

