import React from "react";
import useProductos from "../hooks/useProductos";
import { useNavigate } from "react-router-dom";

const Productos = ({ title }) => {
  const { handleDelete, productos } = useProductos();
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/actualizar-producto/${id}`);
  };
  return (
    <div className="listado-container">
      <h2 className="title">{title}</h2>
      {productos.length > 0 ? (
        <table className="listado-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Codigo EAN</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Tipo</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.idProducto}>
                <td>{producto.idProducto}</td>
                <td>{producto.codigoEan}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.descripcionProducto}</td>
                <td>{producto.tipo}</td>
                <td>{producto.marca}</td>
                <td>{`$  ${producto.precio}`}</td>
                <td>{producto.stock}</td>
                <td>
                  <div>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(producto.idProducto)}
                    >
                      DELETE
                    </button>
                    <button
                      className="btn-update"
                      onClick={() => handleUpdate(producto.idProducto)}
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
        <h2 className="title">Aun no se han cargado productos</h2>
      )}
      <a href="/agregar-producto">
        <button className="btn-add">Agregar productos</button>
      </a>
    </div>
  );
};
export default Productos;
