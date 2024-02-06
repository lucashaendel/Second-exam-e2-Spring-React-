import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getClientes = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/clientes");
        setClientes(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getClientes();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/clientes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setClientes(clientes.filter((cliente) => cliente.id !== id));
          Swal.fire({
            icon: "success",
            title: "Cliente borrado con exito!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1300);
        } else {
          console.error("Error al eliminar el cliente");
        }
      })
      .catch((error) => console.error("Error al eliminar el cliente", error));
  };

  return { clientes, loading, error, handleDelete };
};

export default useClientes;
