import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/productos");
        setProductos(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setProductos(productos.filter((producto) => producto.id !== id));
          Swal.fire({
            icon: "success",
            title: "Producto borrado con exito!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1100);
        } else {
          console.error("Error al eliminar el producto");
        }
      })
      .catch((error) => console.error("Error al eliminar el producto", error));
  };

  return { productos, loading, error, handleDelete };
};

export default useProductos;
