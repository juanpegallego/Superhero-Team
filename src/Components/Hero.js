import React, {useState}  from 'react';
import Card from '../Components/Card'
import ButtonContainer from './ButtonContainer';
import FetchData from './FetchData';


const  Hero = (props) => {    
  const { item, url } = props; 
  const [isActive, setActive] = useState("hide");  
  const handleToggle = () => {setActive(!isActive)}; 
  
  const [info, setInfo] = useState({
    id:" ",
    name: " ",
    image:" ",
    powerstats:" " ,
    biography:" ",
    appearance:" ",
    work:" "
  });  
  
  

 
  const getData = async  (url) => {
    await fetch(url, {mode:'cors'})
    .then(response => {
      if (!response.ok) throw Error(response.status);
      return response
    }) 
    .then(res => res.json())
    .then(data => setInfo(data))    
    .catch(err => console.log(err))    
         
    }
      
  getData(url)

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
              heroeId={item}
              item={item}
            />    
        </div>      
      );    
  }

export default Hero;
