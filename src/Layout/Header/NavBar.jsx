import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
        <menu>
          <li>
            <NavLink to="/shop-all-products">PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="/top-reviews">REVIEWS</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">ABOUT US</NavLink>
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

      <div className="uniq-ag-navbar-btns">
        <button id="Search" aria-label="Search">
          <LuSearch className="nav-icon" />
        </button>

        <button className="uniq-ag-navbar-cart">
          <span className="uniq-ag-cart-badge">1</span>
          <PiShoppingCartSimple className="nav-icon" />
        </button>

        <button
          className="uniq-ag-navbar-hamburger"
          id="mobileDrawer"
          aria-label="mobileDrawer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoMdClose className="nav-icon" />
          ) : (
            <HiOutlineBars3CenterLeft className="nav-icon" />
          )}
        </button>
      </div>

      <div
        className={`uniq-ag-mobile-nav-drawer ${
          isMobileMenuOpen ? "mobileDrawerOpen" : ""
        }`}
      >
        <menu className="uniq-ag-mobile-nav-drawer-menu-list">
          <li>
            <NavLink onClick={toggleMobileMenu} to="/shop-all-products">
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMobileMenu} to="/top-reviews">
              REVIEWS
            </NavLink>
          </li>

          <li>
            <NavLink onClick={toggleMobileMenu} to="/about-us">
              ABOUT US
            </NavLink>
          </li>

          <li>
            <NavLink onClick={toggleMobileMenu} to="/faqs">
              FAQS
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={toggleMobileMenu}
              to="https://uniqaya.com/apps/parcelpanel"
            >
              TRACK ORDER
            </NavLink>
          </li>
        </menu>
      </div>
    </nav>
  );
};

export default NavBar;
