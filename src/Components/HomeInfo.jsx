import React from 'react'


function HomeInfo(props) {
    const { superHeroeData, arrayTeam} = props;
    const arraySpeed = []
    const Setup = () => {
        for (let i = 0; i < arrayTeam.length; i++) {
            const element = arrayTeam[i];
            arraySpeed.push(superHeroeData.id === element);
            console.log(arraySpeed)
        }
        
            }
            
        
    Setup()
    

    return (
        <div className='team-title-container'>
            <h3>Mi equipo</h3>            
            <h4>Total Powerstats</h4> <br /><br />
            <h5>Promedio speed equipo: </h5>
        </div>
    )
}

export default HomeInfo
