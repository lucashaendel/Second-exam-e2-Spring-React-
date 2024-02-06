import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClienteNuevo = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/clientes", {
        nombre: nombre,
        apellido: apellido,
        fechaIngreso: fechaIngreso,
        domicilio: domicilio,
        telefono: telefono,
      });
      if (response.status === 201) {
        navigate("/home");
        Swal.fire({
          title: "Excelente",
          text: "Cliente creado con exito!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error al guardar el Cliente", error);
    }
  };

  return (
    <div>
      <div>
        <h2 className="title">Nuevo Cliente</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
            className="form-input"
          />
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            required
            className="form-input"
          />
          <input
            type="text"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            placeholder="fechaIngreso"
            required
            className="form-input"
          />
          <input
            type="text"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            placeholder="domicilio"
            required
            className="form-input"
          />
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="telefono"
            required
            className="form-input"
          />
          <button type="submit" className="form-button">
            Guardar Cliente
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClienteNuevo;
