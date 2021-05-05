import React, { useState } from 'react';

const InfoAdicional = (props) => {
    const {heroe} = props;


    return ( 

        <div className={`${props.className}`}>
            <ul >
                    <h3> Informacion adicional </h3>
                <li>
                Peso: <span>{heroe.appearance.weight} </span> 
                </li>

                <li>
                Altura: <span>{heroe.appearance.height} </span>
                </li>

                <li>
                    Fullname:<span>{heroe.biography['full-name']} </span>
                </li>

                <li>
                Color de ojos: <span>{heroe.appearance['eye-color']} </span>
                </li>

                <li>
                Color de cabello:<span>{heroe.appearance['hair-color']} </span> 
                </li>

                <li>
                Alineacion: <span>{heroe.biography.alignment} </span>
                </li>
                
                <li>
                Lugar de trabajo: <span> {heroe.work.base}</span>
                </li>
            
            </ul>

    </div>
     );
}
 
export default InfoAdicional;