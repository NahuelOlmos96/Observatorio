import React from 'react';
import flechaVentanas from  "../imagenes/flechasVentanas.png"
import "../estilos/flecasesion.css"

function Flechasesion(props) {
    return (
        <div className='contenedorFlecha row'>
            <img className='imagenFlecha col-11' src={flechaVentanas} alt="" />
            <p className='nombreFlecha col-1'>{props.nombreSecion}</p>

        </div>
    );
}

export default Flechasesion;