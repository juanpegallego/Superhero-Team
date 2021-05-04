import React, { useState } from 'react';

const SearchResultItems = (props) => {
    const {data} = props;
    const [team, setTeam] = useState([]);
    
    const agregarTeam = () =>{
        
        if (team.length <= 6){
            setTeam([...team, data.id]);
            
        }
        else{
            alert('Tu equipo esta completo');
            
        }
    }
    
    return ( 

        <div >
            <div className="search-result">

                <div className="left">
                    <div className="img">
                        <img src={data.image.url}
                        alt="super img" />
                    </div>
                </div>

                <div className="right">
                    <div className="name">
                        <h1> {data.name} </h1>                        
                    </div>
                    <div className="powerstats">
                        <ul>
                            <li>Power: <span> {data.powerstats.power}</span></li>
                            <li>Strength: <span>{data.powerstats.strength}</span></li>
                            <li>Speed:<span>{data.powerstats.speed}</span> </li>
                            <li>intelligence:<span>{data.powerstats.intelligence}</span> </li>
                        </ul>
                        <button className="btn btn-success"
                                onClick={agregarTeam}
                                >Agregar
                        </button>
                    </div>
                </div>
            
               
            </div>
        </div>
     );
}
 
export default SearchResultItems;