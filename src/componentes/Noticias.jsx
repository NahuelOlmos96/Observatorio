import React from "react";
import "../estilos/estiloTarjetas.css";
import "../estilos/estilosNoticias.css";
import flechaVentanas from "../imagenes/flechasVentanas.png";
import imgnoticia1 from "../imagenes/contenidoNoticias/Noticia1.png";
import datosNoticia from "../datos/notias.js";

export const Noticias = () => {
  return (
    <div className="contenedor">
      <div className="presentacioNoticias">
        <p className="nombreflecha">NOTICIAS</p>
        <img className="imagenFlecha" src={flechaVentanas} alt="" />
      </div>

      <div className="contenodorCarrucel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imgnoticia1} class="w-100" alt="..." />
              <div className="textNoticia">
                <p >
                  Un caso de Vinculación: "Una PyME cordobesa exporta sistemas
                  de mantenimiento 4.0 al mercado europeo y asiático, con
                  asistencia del INTI" La empresa STI Developments se convirtió
                  en proveedora de servicios de Industria 4.0 para 23 sedes de
                  una multinacional alimenticia.
                </p>
                <a href="https://www.argentina.gob.ar/noticias/una-pyme-cordobesa-exporta-sistemas-de-mantenimiento-40-al-mercado-europeo-y-asiatico-con">
                  funte
                </a>
              </div>
            </div>

            {datosNoticia.map((noticias) => (
              <div class="carousel-item">
                <img src={noticias.imagen} class=" w-100" alt="..." />
                <div className="textNoticia">
                  <p>{noticias.texto}</p>
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
