import React from "react";
import "../estilos/estilospresentacion.css";
import "../estilos/estilonosotros.css";
import Flechasesion from "./Flechasesion";
export const Nosotros = () => {
  return (
    <div className="contenedor">
      <div className="fondoNosotros">
        <div className="presentacio">
          <Flechasesion nombreSecion={"Nosotros"} />
        </div>
        <div className="contenidoNosotros"> texto</div>
      </div>
    </div>
  );
};
