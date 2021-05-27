import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand navt" to="/">
        <h2>Cryptography</h2>
      </Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">Menu</span>
    </button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">

    <li className="nav-item">
             <Link
               to="/"
               className={
                 window.location.pathname === "/" || window.location.pathname === "/home"
                   ? "nav-link active"
                   : "nav-link"
               }
             >
               <i className="bx bx-home"></i><span>Home</span>
             </Link>
          </li>


          <li className="nav-item">
             <Link
               to="/signup"
               className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
             >
               <i className="bx bx-user"></i><span>Sign Up</span>
             </Link>
           </li>

           <li className="nav-item">
             <Link
               to="/login"
               className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
             >
               <i className="bx bx-user"></i><span>Log In</span>
             </Link>
           </li>
        <li className="nav-item">
        <a href="https://github.com/mpkahn/cryptography"
          className="nav-link"
        ><i className="bx bxl-github"></i><span>Github</span>
        </a>
        </li>
    </ul>     
</div>
</nav>
  );
}

export default Navbar;

