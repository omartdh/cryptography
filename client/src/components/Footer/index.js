import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer>
    <div className="footer-content">
        <h3>Cryptography</h3>
        <p>Designed and developed by:</p>
        <ul className="socials">
            <li>Omar Dahmash<a href="https://github.com/omartdh"><i className="bx bxl-github"></i></a><a href="https://www.linkedin.com/in/omar-dahmash-b34693a4/"><i className="bx bxl-linkedin"></i></a></li>
            <li>Michael Kahn<a href="https://github.com/mpkahn"><i className="bx bxl-github"></i></a><a href="https://www.linkedin.com/in/michael-kahn-9b011b8a/"><i className="bx bxl-linkedin"></i></a></li>
            <li>Miguel Alcantar<a href="https://github.com/malcan09"><i className="bx bxl-github"></i></a><a href="https://www.linkedin.com/in/miguel-alcantar-8018531b9/"><i className="bx bxl-linkedin"></i></a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>copyright &copy;{ new Date().getFullYear() } Cryptography</p>
    </div>
</footer>
  );
}

export default Footer;