import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductoNuevo from "./components/ProductoNuevo";
import ActualizarProducto from "./components/ActualizarProducto";
import ActualizarCliente from "./components/ActualizarCliente";
import ClienteNuevo from "./components/ClienteNuevo";
import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<PrivateRoute />} />{" "}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agregar-producto" element={<ProductoNuevo />} />
          <Route path="/agregar-cliente" element={<ClienteNuevo />} />
          <Route
            path="/actualizar-producto/:id"
            element={<ActualizarProducto />}
          />
          <Route
            path="/actualizar-cliente/:id"
            element={<ActualizarCliente />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Home productos={"Listado de productos"} clientes={"Listado de clientes"} />
  ) : (
    <Navigate to="/login" />
  );
}

export default App;
