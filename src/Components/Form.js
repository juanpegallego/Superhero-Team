import React, { useState } from 'react'
import Formulario from './Formulario';

  const useFetch = () => {        
    const [token, setToken] = useState('');  
    const url = 'http://challenge-react.alkemy.org/'; 
   

    const onSubmit = (datos) =>{     
       
      fetch(url , {
          method: 'POST',
          credentials: 'omit', 
          redirect: 'manual',
          headers: {
            'Content-Type': 'application/json'          
          },
          body: JSON.stringify(datos) 
        })     
      .then(response => response.json())
      .then(data => setToken(data.token))   
        
  }

  if(token){
    alert('Bienvenido nuevamente!')
    window.localStorage.setItem('tokenId', token);
    window.location='/buscador' ;
    
  }
  
    return (
        <Formulario
        onSubmit={onSubmit}
        />
      );
}
 
export default useFetch;