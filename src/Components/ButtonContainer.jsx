import React from 'react'

function ButtonContainer(props) {
    return (
        <div className="btn-container"
            >
                 <button 
                 className='btn btn-info'
                 onClick={props.detalle}
                    >{props.boton}
                 </button>
                 
                 <button 
                 className='btn btn-danger'
                 onClick={props.eliminar}
                 >Eliminar
                 </button>
            </div>

    )
}

export default ButtonContainer
