import React from "react";
import Flechasesion from "./Flechasesion";
import "../estilos/estilospresentacion.css";
import datosProgramas from "../datos/gacetillas.js";
import "../estilos/estilogacetilla.css"

const Gacetillas = () => {
  return (
    <div className="contenedor">
      <div className="fondoprogramas">
        <div className="presentacio">
          <Flechasesion nombreSecion="Gacetillas" />
        </div>
      </div>
      <div className="encabezadoCelGacetilla text-primary"><p className="texto">Gacetilla</p></div>
      <div className="contenedorCarrucel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner Carrucel">
            <div class="carousel-item active">
              <img src={"https://i.ibb.co/K2NRg0b/Gacetilla-OTT-Traccionar-page-0001.jpg"} class="imagenCarrucel" alt="..." />
             
            </div>

            {datosProgramas.map((programas) => (
              <div class="carousel-item">
                <img src={programas.imagen} class="imagenCarrucel" alt="..." />
                
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

export default Gacetillas;
