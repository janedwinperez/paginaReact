import React from "react";
import Formulario from "../componentes/Formulario";
import Titulo from "../componentes/Titulo";

function Productos() {
    return (
      <div>
          <h1><Titulo mititulo="Catalogo de productos" /></h1>
          <Formulario/>
      </div>
    );
  }

  export default Productos;