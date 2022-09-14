import React from "react";
import "../estilos/estiloInicio.css";
import logoObservatorio from "../imagenes/logoObservatorio.png";
import flecha1 from "../imagenes/flechas1.png";
import flecha2 from "../imagenes/flechas2.png";
import logo1 from "../imagenes/logoApoyovinculantes/logo1.png";
import logo2 from "../imagenes/logoApoyovinculantes/logo2.png";
import logo3 from "../imagenes/logoApoyovinculantes/logo3.png";
import logo4 from "../imagenes/logoApoyovinculantes/logo4.png";
import logo5 from "../imagenes/logoApoyovinculantes/logo5.png";
import logo6 from "../imagenes/logoApoyovinculantes/logo6.png";
import logo7 from "../imagenes/logoApoyovinculantes/logo7.png";
import logo8 from "../imagenes/logoApoyovinculantes/logo8.png";
import logo9 from "../imagenes/logoApoyovinculantes/logo9.png";
import logo10 from "../imagenes/logoApoyovinculantes/logo10.png";
import logo11 from "../imagenes/logoApoyovinculantes/logo11.png";
import logoMiembro from "../imagenes/logoApoyovinculantes/logoMiembros.png"

import AOS from "aos";
export const Inicio = () => {
  AOS.init();
  return (
    <div className="contenedorTodo">
      <div className="container contenedorInicio">
        <div className="contendorflecha ">
          <img className="flechaAnimada1  " src={flecha1} alt="" />
          <img className="flechaAnimada2" src={flecha2} alt="" />
          <img className="logoOb " src={logoObservatorio} alt="" />
        </div>
      </div>

      <div className="contendorMiembros">
        
        <div className="contendorapoyo">
          <img className="logomiembro" src={logoMiembro} alt="cargando imagen..." />
          MIEMBROS
        </div>
        <div className="contenedorLogos">
          <div className="row justify-content-center">
            <img data-aos="flip-right" className="col-2" src={logo1} alt="" />
            <img data-aos="flip-right" className="col-2" src={logo2} alt="" />
            <img data-aos="flip-right" className="col-2" src={logo3} alt="" />
            <img data-aos="flip-right" className="col-2" src={logo4} alt="" />
          </div>
          <div className="row justify-content-center">
            <img data-aos="flip-right" className="col-2" src={logo5} alt="" />
            <img
              data-aos="flip-right"
              className="col-2 img-fluid"
              src={logo6}
              alt=""
            />
            <img data-aos="flip-right" className="col-2" src={logo7} alt="" />
            <img data-aos="flip-right" className="col-2" src={logo8} alt="" />
          </div>{" "}
          <div className="row justify-content-center">
            <img data-aos="flip-right" className="col-2 " src={logo10} alt="" />
            <img data-aos="flip-right" className="col-2 " src={logo11} alt="" />
            <img data-aos="flip-right" className="col-2 " src={logo9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
