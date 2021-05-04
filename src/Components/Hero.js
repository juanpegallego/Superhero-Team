import React, {useState}  from 'react';
import Card from '../Components/Card'
import ButtonContainer from './ButtonContainer';
import FetchData from './FetchData';


const  Hero = (props) => {
  const url = `https://superheroapi.com/api/499066611225583/${props.heroeId}`;

  const equipo = [];
  const [isActive, setActive] = useState("hide");
  
  const [info, setInfo] = useState({
    name: " ",
    image:" ",
    powerstats:" " ,
    biography:" ",
    appearance:" ",
    work:" "
  });
  
 
  getData(url); 
  
  

  const handleToggle = () => {
    setActive(!isActive)
  }
   
 
  function handleErrors(res) {
    if (!(res.ok)) throw new Error(res.error);
    return res;
  }
  
   function getData(x){
    fetch(x)
    .then(handleErrors)   
    .then(res => res.json())
    .then(data => setInfo(data))    
    .catch(err => console.log(err));
    equipo.push(info.name)
    

    }
    console.log(equipo)
   
 
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
 
          <FetchData
          className={isActive ? "hide" : "lista-datos-extra"}
          heroeId={props.heroeId}
          /> 
            
        </div>
        
      ); 
    
       
  }

export default Hero;
