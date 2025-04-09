import { NavLink } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterNavBar = () => {
  return (
    <nav className="uniq-ag-footer-navbar">
      <div className="uniq-ag-footer-navbar-menus">
        <h1>Support</h1>
        <menu>
          <NavLink to="/about-us">
            <li> About Us</li>
          </NavLink>
          <NavLink to="/contact-us">
            <li>Contact Us</li>
          </NavLink>
          <NavLink to="/blogs">
            <li>Blogs</li>
          </NavLink>
          <NavLink to="/faqs">
            <li>FAQS</li>
          </NavLink>
          <NavLink to="https://uniqaya.com/apps/parcelpanel">
            <li>TRACK ORDER</li>
          </NavLink>
        </menu>
      </div>

      <div className="uniq-ag-footer-navbar-menus">
        <h1>Policy Info</h1>
        <menu>
          <NavLink to="/disclaimer">
            <li> Disclaimer</li>
          </NavLink>
          <NavLink to="/privacy-policy">
            <li>Privacy Policy</li>
          </NavLink>
          <NavLink to="/terms-conditions">
            <li>Terms & Conditions</li>
          </NavLink>
          <NavLink to="/shipping-policy">
            <li>Shipping Policy</li>
          </NavLink>
          <NavLink to="/cancellation-refund-policy">
            <li>Cancellation/Refund Policy</li>
          </NavLink>
        </menu>
      </div>

      <div className="uniq-ag-footer-navbar-menus">
        <h1>Highlights</h1>
        <menu>
          <NavLink to="https://uniqayalifestyle.com/highlights/">
            <li>Ingredient of the Month</li>
          </NavLink>
          <NavLink to="/offers">
            <li>Offers</li>
          </NavLink>
          <NavLink to="/press">
            <li>Press & Media</li>
          </NavLink>
          <NavLink to="/bethechange">
            <li>C.H.A.N.G.E</li>
          </NavLink>
        </menu>
      </div>

      <div className="uniq-ag-footer-navbar-menus">
        <div className="uniq-ag-footer-contact-options">
          <h1>Get in Touch</h1>
          <div className="uniq-ag-footer-contacts">
            <div>
              <MdLocalPhone className="uniq-ag-footer-contacts-icon" />
              <a href="tel:+917087113442"> +91-7087113442</a>
            </div>
            <div>
              <MdEmail className="uniq-ag-footer-contacts-icon" />{" "}
              <a href="mailto:care@uniqaya.com">Send email</a>
            </div>
          </div>
        </div>

        <div className="uniq-ag-footer-social-options">
          <h1>Follow Us</h1>
          <div className="uniq-ag-socials">
            <a target="_blank" href="https://www.instagram.com/uniqayalifestyle/">
              <AiFillInstagram />
            </a>
            <a target="_blank" href="https://www.facebook.com/Uniqayalifestyle/">
              <FaFacebook />
            </a>
            <a target="_blank" href="https://www.youtube.com/@uniqayalifestyle">
              <FaYoutube />
            </a>
            <a target="_blank" href="https://in.linkedin.com/company/uniqayalifestyle">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FooterNavBar;
