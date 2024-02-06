import React from "react";
import Productos from "./Productos";
import Clientes from "./Clientes";

const Home = ({ productos, clientes }) => {
  return (
    <div>
      <Productos title={productos} />
      <Clientes title={clientes} />
    </div>
  );
};

export default Home;
