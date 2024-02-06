import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProductoNuevo() {
  const navigate = useNavigate();
  const [codigoEan, setCodigoEan] = useState();
  const [nombreProducto, setNombreProducto] = useState();
  const [descripcionProducto, setDescripcionProducto] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState();
  const [stock, setStock] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/productos", {
        codigoEan: codigoEan,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        tipo: tipo,
        marca: marca,
        precio: precio,
        stock: stock,
      });
      if (response.status === 201) {
        navigate("/home");
        Swal.fire({
          title: "Excelente",
          text: "Producto creado con exito!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error al guardar el Producto", error);
    }
  };

  return (
    <div>
      <div className="formulario">
        <h2 className="title">Nuevo Producto</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            value={codigoEan}
            onChange={(e) => setCodigoEan(e.target.value)}
            placeholder="codigo EAN"
            className="form-input"
            required
          />
          <input
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            placeholder="nombreProducto"
            className="form-input"
            required
          />
          <input
            type="text"
            value={descripcionProducto}
            onChange={(e) => setDescripcionProducto(e.target.value)}
            placeholder="Descripcion del producto"
            className="form-input"
            required
          />
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="tipo"
            className="form-input"
            required
          />
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Marca"
            className="form-input"
            required
          />
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="precio"
            className="form-input"
            required
          />
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="stock"
            className="form-input"
            required
          />
          <button type="submit" className="form-button">
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductoNuevo;
