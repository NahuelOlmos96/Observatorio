import React from "react";
import "../estilos/estilospresentacion.css";
import "../estilos/estilocapacitaciones.css";
import Flechasesion from "./Flechasesion";

import datosCapacitaciones from "../datos/Capacitaciones";

export const Capacitaciones = () => {
  return (
    <div className="contenedor">
      <div className="fondoCapaciotaciones">
        <div className="presentacio">
          <Flechasesion nombreSecion="Capacitaciones" />
        </div>
      </div>
      <div className="encabezadoCelCapacitaciones text-primary">
        <p className="texto">Capacitaciones</p>
      </div>
      <div className="contenedorCarrucel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner CarrucelNoticias">
            <div class="carousel-item active">
              <img src="https://i.ibb.co/P5Vr1sk/OTT-Info1.png" class="imagenCarrucel" alt="..." />
              <div className="textNoticia">
                <div>
                  Un caso de Vinculación: "Una PyME cordobesa exporta sistemas
                  de mantenimiento 4.0 al mercado europeo y asiático, con
                  asistencia del INTI" La empresa STI Developments se convirtió
                  en proveedora de servicios de Industria 4.0 para 23 sedes de
                  una multinacional alimenticia.El Observatorio de Transferencia
                  Tecnológica informa sobre la Agenda de Formación y
                  Capacitación del Ministerio de Ciencia, Tecnología e
                  Innovación. A través de talleres, seminarios, capacitaciones,
                  presentaciones de resultados, entre otros, se brinda apoyo a
                  la transferencia, adopción y adaptación de habilidades y
                  conocimientos creados en temáticas vinculadas a Vigilancia
                  Tecnológica e Inteligencia Estratégica, prospectiva
                  tecnológica, propiedad intelectual y transferencia de
                  tecnología, para que sean aplicados en el territorio.
                </div>
                <a href="https://www.argentina.gob.ar/noticias/una-pyme-cordobesa-exporta-sistemas-de-mantenimiento-40-al-mercado-europeo-y-asiatico-con">
                  funte
                </a>
              </div>
            </div>

            {datosCapacitaciones.map((noticias) => (
              <div class="carousel-item">
                <img src={noticias.imagen} class="imagenCarrucel" alt="..." />
                <div className="textNoticia">
                  <div>{noticias.texto}</div>
                  <a href={noticias.link}>Funte</a>
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
