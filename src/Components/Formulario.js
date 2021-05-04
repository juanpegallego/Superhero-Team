import React,{ useState } from 'react';

function Formulario(props) {
    const {onSubmit} = props;
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
       event.preventDefault();
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    

    return (
        <div className='login-container'>
            <h1 className='form-title'> Iniciar Sesion </h1>

            <form onSubmit={onSubmit(datos)} 
                className='form form-control' >
                <input 
                placeholder='challenge@alkemy.org'
                type="email"
                name="email"
                className="form-control my-2"
                onChange={handleInputChange}
                />
                


                <input 
                placeholder='react'
                type="password"
                name="password"
                className="form-control my-2"
                onChange={handleInputChange}
                />
                


                <button className="btn btn-primary" >
                Enviar
                </button>
            </form>
            
        </div>
    )
}

export default Formulario
