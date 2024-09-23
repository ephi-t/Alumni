import React, { useEffect, useState } from "react";
import "../NavBar/NavBar.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  const isDarkNav = location.pathname !== "/";
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container1 ${sticky || isDarkNav ? `dark-nav ` : ` `}`}>
      <h1 className="logo font-bold text-2xl">DBU ALUMNI</h1>
      <ul className={mobileMenu ? `` : `hide-mobile-menu`}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link>
          <li>Events</li>
        </Link>
        <Link>
          <li>Alumni</li>
        </Link>
        <Link>
          <li>Job</li>
        </Link>
        <Link>
          <li>Survey</li>
        </Link>

        <li>
          <Link to="/dashboard">
            <button className="btn">Dashboard</button>
          </Link>
        </li>
      </ul>

      <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
