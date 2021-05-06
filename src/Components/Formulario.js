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
            
            <form onSubmit={onSubmit(datos)} 
                className='form form-control' >
                <span>Correo Electronico</span>
                <input
                type="email"
                name="email"
                className="form-control my-2"
                onChange={handleInputChange}
                />
                

                <span>Password</span>
                <input 
                type="password"
                name="password"
                className="form-control my-2"
                onChange={handleInputChange}
                />
                


                <button className="btn-send">
                Enviar
                </button>
                <button className='forgot'>
                    No recordas tu clave?
                </button>
            </form>
            
        </div>
    )
}

export default Formulario
