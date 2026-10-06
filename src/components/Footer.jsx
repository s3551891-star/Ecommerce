import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-column footer-brand">
            <Link to="/" className="footer-logo">
              SHOP<span>SPHERE</span>
            </Link>

            <p className="footer-description">
              Your trusted online shopping destination for quality
              products, great prices, and a smooth shopping experience.
            </p>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>

              <a
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                X
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                yt
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/products">Shop Products</Link>
              </li>

              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>

              <li>
                <Link to="/cart">Shopping Cart</Link>
              </li>

              <li>
                <Link to="/orders">My Orders</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-column">
            <h3>Customer Service</h3>

            <ul className="footer-links">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <Link to="/profile">My Account</Link>
              </li>

              <li>
                <Link to="/orders">Order Tracking</Link>
              </li>

              <li>
                <span>Shipping Information</span>
              </li>

              <li>
                <span>Returns & Refunds</span>
              </li>

              <li>
                <span>FAQs</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Lahore, Pakistan</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+92 300 1234567</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <span>support@shopsphere.com</span>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4>Subscribe to our newsletter</h4>

              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                />

                <button
                  type="button"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="footer-benefits">
        <div className="footer-container footer-benefits-grid">
          <div className="footer-benefit">
            <Truck size={24} />

            <div>
              <strong>Fast Delivery</strong>
              <span>Quick & reliable shipping</span>
            </div>
          </div>

          <div className="footer-benefit">
            <ShieldCheck size={24} />

            <div>
              <strong>Secure Shopping</strong>
              <span>Safe & protected checkout</span>
            </div>
          </div>

          <div className="footer-benefit">
            <CreditCard size={24} />

            <div>
              <strong>Secure Payments</strong>
              <span>Multiple payment options</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-container">
          <p>
            © {new Date().getFullYear()} ShopSphere. All rights
            reserved.
          </p>

          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;