import React, { useState } from 'react'

  const useFetch = () => {        
    const [token, setToken] = useState('');  
    const url = 'http://challenge-react.alkemy.org/'; 


    const onSubmit = (data, e) =>{     
      e.preventDefault()
      fetch(url,{
          method: 'POST',
          credentials: 'include', 
          redirect: 'manual',
          headers: {
            'Content-Type': 'application/json'          
          },
          body: JSON.stringify(data) 
        })     
      .then(response => response.json())
      .then(data => setToken(data.token))
      
    console.log(data)
       
  }
  
  
  const guardarToken = () =>{
    window.localStorage.setItem('tokenId', token);
    setTimeout(chequeo,3000)

    }
  function chequeo(){
      if(token){
        window.location='/home'    
        } 
      else if (token == null){
        alert('Clave erronea, vuelta a intentarlo')
      }
    
    }

    guardarToken()

    return (
        <div className='login-container'>
          <h1 className='form-title'> Iniciar Sesion </h1>

          <form          
          onSubmit={onSubmit} className='form form-control' >
            <input 
              placeholder='challenge@alkemy.org'
              type="email"
              name="email"
              className="form-control my-2"
              
            />
            


            <input 
              placeholder='react'
              type="password"
              name="password"
              className="form-control my-2"
              
            />
            


            <button className="btn btn-primary" >
              Enviar
            </button>
          </form>

        </div>

      );
}
 
export default useFetch;