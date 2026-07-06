import React from "react";
import logo from "/public/logo.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <img src={logo} alt="" width={100} />
      <nav>
        <ul>
          <li>
            <Link to="/" className="palabra">
              Noticias
            </Link>
          </li>
          <li>
            <Link to="/blog" className="palabra">
              Vender Fotos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
