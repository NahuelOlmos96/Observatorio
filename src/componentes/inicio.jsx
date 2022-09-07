import React from "react";
import "../estilos/estiloInicio.css";
import logoObservatorio from "../imagenes/logoObservatorio.png";
import flecha1 from "../imagenes/flechas1.png";
import flecha2 from "../imagenes/flechas2.png";

export const Inicio = () => {
  return (
    <div className="container contenedorInicio">
      <img className="logo flechaAnimada1 col-4 " src={flecha1} alt="" />
      <img className="logo flechaAnimada2 col-4 " src={flecha2} alt="" />
      <img className="logo logoOb  col-4 " src={logoObservatorio} alt="" />
    </div>
  );
};
