import React from 'react';
import "../estilos/estilosNosotros.css"
import '../estilos/estiloTarjetas.css'
import flechaVentanas from  "../imagenes/flechasVentanas.png"
export const Nosotros = () =>{
    return(
        <div className='contenedor'>
            <div className='presentacioNosotros'>
                <p className='nombreflecha'>Nosotros</p>
                <img className='imagenFlecha' src={flechaVentanas} alt="" />
            </div>
            <div className='contenidoNosotros'> texto</div>
        </div>
    );
} 