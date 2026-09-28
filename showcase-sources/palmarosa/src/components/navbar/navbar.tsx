import { Link } from "react-router-dom";
import { useState } from "react";
import { publicPath } from "../../utils/publicPath";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="palmarosa-navbar-wrapper">
      <div className="logo-wrapper">
        <div
          className="logo"
          style={{ backgroundImage: `url('${publicPath("photos/palm-logo.jpg")}')` }}
        ></div>
        <div className="brand-name">Palma Rosa Hotel</div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`menu-wrapper ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="menu-item" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/rooms"
          className="menu-item"
          onClick={() => setMenuOpen(false)}
        >
          Rooms
        </Link>
        <Link
          to="/contact"
          className="menu-item"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
