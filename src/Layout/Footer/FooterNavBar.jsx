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
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          <li>
            <NavLink to="/faqs">FAQS</NavLink>
          </li>

          <li>
            <NavLink to="https://uniqaya.com/apps/parcelpanel">
              TRACK ORDER
            </NavLink>
          </li>
        </menu>
      </div>

      <div className="uniq-ag-footer-navbar-menus">
        <h1>Policy Info</h1>
        <menu>
          <li>
            <NavLink to="/disclaimer">Disclaimer</NavLink>
          </li>
          <li>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/shipping-policy">Shipping Policy</NavLink>
          </li>
          <li>
            <NavLink to="/cancellation-refund-policy">
              Cancellation Policy
            </NavLink>
          </li>
        </menu>
      </div>

      <div className="uniq-ag-footer-navbar-menus">
        <h1>Highlights</h1>
        <menu>
          <li>
            <NavLink to="https://uniqayalifestyle.com/highlights/">
              Ingredient of the Month
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers">Offers</NavLink>
          </li>
          <li>
            <NavLink to="/press">Press & Media</NavLink>
          </li>
          <li>
            <NavLink to="/bethechange">C.H.A.N.G.E</NavLink>
          </li>
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
            <a
              target="_blank"
              title="Uniqaya Lifestyle on Instagram"
              href="https://www.instagram.com/uniqayalifestyle/"
            >
              <AiFillInstagram />
            </a>
            <a
              target="_blank"
              title="Uniqaya Lifestyle on Facebook"
              href="https://www.facebook.com/Uniqayalifestyle/"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              title="Uniqaya Lifestyle on YouTube"
              href="https://www.youtube.com/@uniqayalifestyle"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              title="Uniqaya Lifestyle on LinkedIn"
              href="https://in.linkedin.com/company/uniqayalifestyle"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FooterNavBar;
