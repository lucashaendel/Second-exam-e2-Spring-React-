import React from "react";
import useClientes from "../hooks/useClientes";
import { useNavigate } from "react-router-dom";

const Clientes = ({ title }) => {
  const { clientes } = useClientes();
  const { handleDelete } = useClientes();
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/actualizar-cliente/${id}`);
  };
  return (
    <div className="listado-container">
      <h2 className="title">{title}</h2>
      {clientes.length > 0 ? (
        <table className="listado-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de ingreso</th>
              <th>Domicilio</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.idClientes}>
                <td>{cliente.idClientes}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.fechaIngreso}</td>
                <td>{cliente.domicilio}</td>
                <td>{cliente.telefono}</td>
                <td>
                  <div>
                    <button
                      className="btn-delete"
                      onClick={(e) => handleDelete(cliente.idClientes)}
                    >
                      DELETE
                    </button>
                    <button
                      className="btn-update"
                      onClick={() => handleUpdate(cliente.idClientes)}
                    >
                      UPDATE
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="title">No se encontraron Clientes</h2>
      )}
      <a href="/agregar-cliente">
        <button className="btn-add">Agregar clientes</button>
      </a>
    </div>
  );
};
export default Clientes;
