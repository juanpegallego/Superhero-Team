import React, {useState} from 'react';


const Listado = (props) => {
const {handleChange, searchText} = props;
      

    return ( 
        <div className='buscador-container' >
            <form >
                <h2>Busca los heroes para tu equipo</h2>
                <input  
                        id='search-bar'
                        type='search'
                        placeholder="Escribi aca el nombre de tu heroe"
                        onChange={handleChange}
                        value={searchText}
                        >

                </input>

            
                
            </form>
            
      
        </div>
     );
}
 
export default Listado;