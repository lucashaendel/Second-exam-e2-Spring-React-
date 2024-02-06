import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const ActualizarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [codigoEan, setCodigoEan] = useState("");
  const [nombreProducto, setnombreProductoProducto] = useState("");
  const [descripcionProducto, setdescripcionProductoProducto] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setprecio] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/productos/${id}`)
      .then((response) => {
        const producto = response.data;
        setCodigoEan(producto.codigoEan);
        setnombreProductoProducto(producto.nombreProducto);
        setdescripcionProductoProducto(producto.descripcionProducto);
        setTipo(producto.tipo);
        setMarca(producto.marca);
        setprecio(producto.precio);
        setStock(producto.stock);
      })
      .catch((error) => {
        console.error("Error al obtener datos del producto:", error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/productos/${id}`, {
        codigoEan: codigoEan,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        tipo: tipo,
        marca: marca,
        precio: precio,
        stock: stock,
      });
      navigate("/home");
      Swal.fire({
        title: "Excelente",
        text: "producto actualizado con éxito!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <div>
      <div>
        <h2 className="title">{`Actualizar producto nro ${id}`} </h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>nombreProducto:</label>
          <input
            type="text"
            value={nombreProducto}
            onChange={(e) => setnombreProductoProducto(e.target.value)}
            placeholder="nombreProducto"
            className="form-input"
          />
          <label>descripcionProducto:</label>
          <input
            type="text"
            value={descripcionProducto}
            onChange={(e) => setdescripcionProductoProducto(e.target.value)}
            placeholder="descripcionProducto"
            className="form-input"
          />
          <label>tipo:</label>
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="tipo"
            className="form-input"
          />
          <label>marca:</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="marca"
            className="form-input"
          />
          <label>precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setprecio(e.target.value)}
            placeholder="precio:"
            className="form-input"
          />
          <label>Stock:</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock:"
            className="form-input"
          />
          <button type="submit" className="form-button">
            Actualizar producto
          </button>
        </form>
      </div>
    </div>
  );
};
export default ActualizarProducto;
