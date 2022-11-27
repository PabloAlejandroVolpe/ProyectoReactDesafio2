import React from "react";
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";





function Footer() {
    return <>
    <footer className="footer">
      <div className="contenedor">
        <div className="row">
          <div className="footer-col">
            <h4>Nosotros</h4>
            <ul>
              <li><a href="#">Icons</a></li>
              <li><a href="#">Icons</a></li>
              <li><a href="#">Icons</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Tienda Online</h4>
            <ul>
              <li><a href="#">Icons</a></li>
              <li><a href="#">Icons</a></li>
              <li><a href="#">Icons</a></li>
              <li><a href="#">Icons</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Seguinos</h4>
            <div className="social-links">
            <a href="" className="facebook"><FaFacebook /></a>
              <a href="" className="twitter"><FaTwitter /></a>
              <a href="" className="instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
}




export default Footer