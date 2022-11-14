import React from "react";
import "../estilos/estilospresentacion.css";
import "../estilos/estilonosotros.css";
import Flechasesion from "./Flechasesion";
import text from "../datos/nostros.js";
export const Nosotros = () => {
  return (
    <div className="contenedor">
      <div className="fondoNosotros">
        <div className="presentacio">
          <Flechasesion nombreSecion={"Nosotros"} />
        </div>
      </div>
      <div className="encabezadoCelNosotros text-primary"><p className="texto">Nosotros</p></div>
      <div className="contenidoNosotros">
        {text[0]}
        <hr />
        <br />
        <h3 className="text-primary">PROPUESTA DE TRABAJO</h3>
        <br />
        <p>
          Mediante un trabajo conjunto y colaborativo, y la interacción de
          diferentes actores sociales, el Observatorio de Transferencia
          Tecnológica tiene por objetivos:
        </p>
        {text[1].map((item, index) => (
          <li>{item}</li>
        ))}
        <br />
        <p>
          De esta manera, mediante la implementación de estas metas, el
          Observatorio de Transferencia Tecnológica, aspira a:
        </p>
        {text[2].map((item, index) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
};
