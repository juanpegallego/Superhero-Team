import React, { useState } from 'react';
import SearchResultItems from './SearchResultItems';


function SearchResults(props){
    const {superHeroeData, agregarId} = props;
    const [team, setTeam] = useState([]);
    

    const agregarTeam = (a) =>{
        if(team.length < 6){
                setTeam([...team, a]);                
            }
        else{
            alert('Alcanzaste el maximo de 6 heroes')
        } 
        
        agregarId(team);     
        console.log(team)
        window.localStorage.setItem('team', team);
    }
    


    return(
        <div className="search-container" >
            {superHeroeData.map(superhero =>
                <SearchResultItems 
                agregarTeam={agregarTeam}
                data={superhero}
                key={superhero.id} />
            )}
        
        </div>
        
    )
}

export default SearchResults