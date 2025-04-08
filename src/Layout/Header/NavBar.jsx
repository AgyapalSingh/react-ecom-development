import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { LuSearch} from "react-icons/lu";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="uniq-ag-navbar">
      <div className="uniq-ag-navbar-logo">
        <Link to="/">
          <img
            alt="Uniqaya-Logo"
            // width={150}
            // height={50}
            src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Uniqaya_Logo_Wide_Clean_Functional.png?v=1724408288"
          />
        </Link>
      </div>

      <div className="uniq-ag-navbar-menus">
        <ul>
          <li>PRODUCTS</li>
          <li>REVIEWS</li>
          <li>ABOUT US</li>
          <li>FAQS</li>
          <li>TRACK ORDER</li>
        </ul>
      </div>

      <div className="uniq-ag-navbar-btns">
        <button>
          <LuSearch className="nav-icon" />
        </button>

        <button className="uniq-ag-navbar-cart">
          <span className="uniq-ag-cart-badge">1</span>
          <PiShoppingCartSimple className="nav-icon" />
        </button>

        <button className="uniq-ag-navbar-hamburger">
          <HiOutlineBars3CenterLeft className="nav-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
