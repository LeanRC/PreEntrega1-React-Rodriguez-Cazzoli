 import React from "react";
 import CartWidget from "../components/CartWidget.jsx";
 
 const NavBar = () => {
   return (
      <div>
        <h1 className="Brand">Bike Store</h1>
        <ul className="nav">
          <li className="nav-item">
          <a className="nav-link" href="#">Bicicletas</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#"> <CartWidget /></a>
          </li>
        </ul>
      </div>
   );
 };
 
 export default NavBar; 
 