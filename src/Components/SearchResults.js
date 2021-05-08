import React, { useState } from 'react';
import SearchResultItems from './SearchResultItems';
import HeroesTeam from './HeroesTeam';

function SearchResults(props){
    const { superHeroeData, agregarId, arrayTeam } = props;
    const [team, setTeam] = useState([])
     
    const agregarTeam = (a) => {       
        if ( a > 0 ){
            if(team.length < 6 ){
                if (!(team.includes(a)) || (!(arrayTeam.includes(a))) ){
                        setTeam([...team, a]);   
                        alert('Ya tienes ' + (team.length + 1)  +' heroes!')
                    }
                    else{ alert('Ya tienes ese heroe!')}} 
                    
            else {alert('Alcanzaste el maximo de 6 heroes')} 
            agregarId(team) 
        }
        
        
    }


    return(
        <div className="search-container" >
            {    
                superHeroeData.map(superhero =>
                    
                    <SearchResultItems 
                    agregarTeam={agregarTeam} 
                    data={superhero}
                    key={superhero.id} />
                )
                }
            {/* <HeroesTeam
            superHeroeData = {superHeroeData}
            /> */}
            
            
        
        </div>
        
    )
}

export default SearchResults