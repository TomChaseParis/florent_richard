import React, { useState } from "react";
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {

  // Smooth State
  const closeMenu = () => setClick(false)

  // Hamburger State
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // color State
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Active Scroll Navbar
  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <p>FLORENT RICHARD</p>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-item" to='news' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ACTUALITES</Link>
        </li>
        <li>
          <Link className="nav-item" to='discography' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>DISCOGRAPHIE</Link>
        </li>
        <li>
          <Link className="nav-item" to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>BIOGRAPHIE</Link>
        </li>
        <li>
          <Link className="nav-item" to='concerts' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>CONCERTS</Link>
        </li>
        <li>
          <Link className="nav-item" to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>CONTACT</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {/* Si menu cliquÃ©, afficher page de fermeture */}
        {click ? (
          <FaTimes size={20} style={{ color: "000" }} />
        ) : (
          // Sinon, afficher hamburger
          <FaBars size={20} style={{ color: "000" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;