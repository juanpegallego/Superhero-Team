import React from 'react';
import Hero from './Hero'

const Team = (props) => {
    const { info, arrayTeam } = props
    
    console.log(arrayTeam)
    console.log(info)
    return (
        <div className='team-container'> 
            {arrayTeam.map(item => 
            <Hero info={info} 
                  key={info.id}
            />
            )} 



         





        </div>
        
        
      );
}
 
export default Team;