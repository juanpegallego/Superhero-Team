import React from 'react';
import Hero from './Hero'

const Team = (props) => {
    


   const {info} = props
    
    return (
        <div className='team-container'>            
           <Hero 
           info={info}  
           />
           
        </div>
        
        
      );
}
 
export default Team;