import React from "react";
import datosReuniones from "../datos/reuniones";
import "../estilos/estiloreuniones.css";
import Flechasesion from "./Flechasesion";

const Reuniones = () => {
  return (
    <div className="contenedor">
      <div className="fondoreuniones">
        <div className="presentacio">
          <Flechasesion nombreSecion="Reuniones" />
        </div>
      </div>
      <div className="encabezadoCelProgramas text-primary">
        <p className="texto">Reuniones</p>
      </div>
      <div className="contenedorCarrucel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner Carrucel">
            <div class="carousel-item active">
              <img
                src={"https://i.ibb.co/vspXggL/1.png"}
                class="imagenCarrucel"
                alt="..."
              />
              <div className="textNoticia">
              <hr />
                <div>
                  El día 22 de marzo de 2022 se llevó a cabo la primera reunión
                  de vinculación organizada por la Secretaría de Relaciones
                  Institucionales de la UTN Facultad Regional Córdoba para el
                  armado del Observatorio de Transferencia Tecnológica.
                </div>
                
              </div>
            </div>

            {datosReuniones.map((capacitaciones) => (
              <div class="carousel-item">
                <img
                  src={capacitaciones.imagen}
                  class="imagenCarrucel"
                  alt="..."
                />
                <div className="textNoticia">
                <hr />
                  <div>{capacitaciones.texto}</div>
                  <hr />
                  <div>{capacitaciones.parcipantes}</div>
                 
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

export default Reuniones;
