import React from 'react';
import Hero from './Hero'

const Team = (props) => {
    const team = [];


   const {info} = props
    team.push(info.name)
    console.log(team)
    return (
        <div className='team-container'>            
            <Hero info={info} />
           
        </div>
        
        
      );
}
 
export default Team;