import React from "react";
import datosCapacitaciones from "../datos/capacitaciones";

import Flechasesion from "./Flechasesion";

const Capacitaciones = () => {
  return (
    <div className="contenedor">
      <div className="fondoNoticias">
        <div className="presentacio">
          <Flechasesion nombreSecion="Capaticiones" />
        </div>
      </div>
      <div className="contenedorCarrucel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner Carrucel">
            <div class="carousel-item active">
              <img src={"https://i.ibb.co/L6C3ddR/2-Flyer-AADTI.png"} class="imagenCarrucel" alt="..." />
              <div className="textNoticia">
                <div>
                  El Observatorio de Transferencia Tecnológica informa la
                  Convocatoria Extraordinaria para la AADTI (Argentina Armónica
                  con Desarrollo Tecnológico e Innovación) del FONTAR.
                </div>
                <hr />
                <div>Mas Info: <a href="http://www.agencia.mincyt.gob.ar/frontend/agencia/convocatoria/485">http://www.agencia.mincyt.gob.ar/frontend/agencia/convocatoria/485</a></div>
              </div>
            </div>

            {datosCapacitaciones.map((capacitaciones) => (
              <div class="carousel-item">
                <img
                  src={capacitaciones.imagen}
                  class="imagenCarrucel"
                  alt="..."
                />
                <div className="textNoticia">
                  <div>{capacitaciones.texto}</div>
                  <hr />
                  {capacitaciones.link.map((datos) => (
                    <div key={datos.id}>
                      <p>
                        {datos.tag}:
                        <a href={datos.linkcapacitacion}>
                          {datos.linkcapacitacion}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Capacitaciones;
