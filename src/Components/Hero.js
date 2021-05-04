import React, {useState}  from 'react';
import Card from '../Components/Card'
import ButtonContainer from './ButtonContainer';
import FetchData from './FetchData';


const  Hero = (props) => {  
  
  const [isActive, setActive] = useState("hide");  
  const handleToggle = () => {setActive(!isActive)}
  
  const { info, team } = props;
   

    return (
        
        <div className='card-container'>
         
        
          <Card 
            className='card'
            name={info.name}
            src={info.image.url}   
            alt={info.name}
            intel={info.powerstats.intelligence}
            strength={info.powerstats.strength}
            speed={info.powerstats.speed}
            durability={info.powerstats.durability}
            power={info.powerstats.power} 
            />  
        
          

          <ButtonContainer 
          detalle={handleToggle}
          boton={isActive ? "Ver Detalle  " : "_"}
            /* eliminar={eliminar}   */
          />
 
          {/* <FetchData
          className={isActive ? "hide" : "lista-datos-extra"}
          heroeId={team}
          />    */}
            
        </div>
      
      ); 
    
       
  }

export default Hero;
