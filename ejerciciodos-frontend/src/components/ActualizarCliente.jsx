import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ActualizarCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/clientes/${id}`)
      .then((response) => {
        const cliente = response.data;
        setNombre(cliente.nombre);
        setApellido(cliente.apellido);
        setFechaIngreso(cliente.fechaIngreso);
        setDomicilio(cliente.domicilio);
        setTelefono(cliente.telefono);
      })
      .catch((error) => {
        console.error("Error al obtener datos del cliente:", error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/clientes/${id}`, {
        nombre: nombre,
        apellido: apellido,
        fechaIngreso: fechaIngreso,
        domicilio: domicilio,
        telefono: telefono,
      });
      navigate("/home");
      Swal.fire({
        title: "Excelente",
        text: "cliente actualizado con éxito!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
    }
  };

  return (
    <div>
      <div className="formulario">
        <h2 className="title">{`Actualizar cliente nro ${id}`} </h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
            className="form-input"
          />
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            required
            className="form-input"
          />
          <label>fechaIngreso:</label>
          <input
            type="text"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            placeholder="fechaIngreso"
            required
            className="form-input"
          />
          <label>domicilio:</label>
          <input
            type="text"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            placeholder="domicilio"
            required
            className="form-input"
          />
          <label>telefono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Telefono:"
            required
            className="form-input"
          />
          <button type="submit" className="form-button">
            Actualizar cliente
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActualizarCliente;
