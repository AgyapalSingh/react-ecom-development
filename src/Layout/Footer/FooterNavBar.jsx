import { NavLink } from "react-router-dom";

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

      <div className="uniq-ag-footer-navbar-menus"></div>
    </nav>
  );
};

export default FooterNavBar;
