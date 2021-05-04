import React from 'react';
import Hero from './Hero'

const Team = (props) => {

    return (
        <div className='team-container'>            
            <Hero heroeId={props.heroe1}/>
            <Hero heroeId={props.heroe2}/>   
            <Hero heroeId={props.heroe3}/>
            <Hero heroeId={props.heroe4}/>
            <Hero heroeId={props.heroe5}/>
            <Hero heroeId={props.heroe6}/> 
        </div>
        
        
      );
}
 
export default Team;