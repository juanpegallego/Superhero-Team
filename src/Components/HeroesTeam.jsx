import React, { useState } from 'react';
import Hero from './Hero'
import HomeInfo from './HomeInfo';

const Team = (props) => {    
    const { arrayTeam, superHeroeData } = props;
    
   let url = ''



    

   
    return (
        <div className='team-container'> 
       
            
            {arrayTeam.map(item =>
            <Hero  
               url = { url = ` https://superheroapi.com/api/499066611225583/${item} `}        
               item = {item}
               key = {arrayTeam} 
             />  
            )
               
               
               
            }
          
        
        
           
            
             
         {/* <HomeInfo
            arrayTeam = {arrayTeam}
            superHeroeData = {superHeroeData}
            />  */}
              
        
        </div>
        
        
      );
}
 
export default Team;