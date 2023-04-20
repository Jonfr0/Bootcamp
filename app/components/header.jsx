"use client";
import { Fragment } from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import "../components/header.css";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const updateMenu = () => {
    if (!isClicked) {
      setHamburgerClicked(!hamburgerClicked);
      setMenuOpen(!menuOpen);
    } else {
      setHamburgerClicked(!hamburgerClicked);
      setMenuOpen(!menuOpen);
    }
    setIsClicked(!isClicked);
  };

  return (
    <Fragment>
      <header className="header" id="target">
        <nav className="navbar">
          <Link href="/" className="logo">
            IZALCODE
          </Link>
          <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/bootcamp" onClick={updateMenu} className="link">
                Bootcamp
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" onClick={updateMenu} className="link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/apply" onClick={updateMenu} className="link">
                Aplicar
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faqs" onClick={updateMenu} className="link">
                FAQs
              </Link>
            </li>
          </ul>
          <div
            className={isClicked ? "hamburger clicked" : "hamburger"}
            onClick={updateMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
