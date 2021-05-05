import React from 'react';
import Hero from './Hero'

const Team = (props) => {
    const { info, team } = props
    
    console.log(team)
    console.log(info)
    return (
        <div className='team-container'> 
       {/*  {team.map(item => 
           <Hero
           info={info} 
           key={info.id}
           
           />)} 
 */}


            {/* <Hero 
           info={info}  
           /> */}






        </div>
        
        
      );
}
 
export default Team;