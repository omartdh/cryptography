import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">Menu</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="" className="nav-link"><span>Home</span></a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link"><span>Crypto</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
