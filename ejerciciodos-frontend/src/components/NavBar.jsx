import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const userName = localStorage.getItem("nombreUsuario");
  const { logout } = useContext(AuthContext);

  return (
    <header>
      <div className="navBar">
        <div className="menu">
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
          </ul>
        </div>
        <div className="userName">
          <h2>{userName ? `Hola, ${userName}` : "Hola"}</h2>
        </div>
        <div className="user">
          {userName ? <button onClick={logout}>SALIR</button> : ""}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
