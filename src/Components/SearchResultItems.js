import React from 'react';

const SearchResultItems = (props) => {
    const {data, agregarTeam} = props; 
    
    
     
    return ( 
        
            <div className="search-result">

                <div className="left">
                    <div className="img">
                        <img src={data.image.url}
                        alt="super img"/>
                    </div>
                </div>

                <div className="right">
                    <div className="name">
                        <h1> {data.name} </h1>                        
                    </div>                    
                        
                    <button 
                        className="btn btn-success"
                        onClick={(e) => agregarTeam(data.id)}
                            >Agregar
                    </button>
                   
                </div>         
               
            </div>
        
     );
}
 
export default SearchResultItems;