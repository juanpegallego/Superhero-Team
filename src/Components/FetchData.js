import React, { useState } from 'react'


function FetchData(props) {
   
    let url = `https://superheroapi.com/api/499066611225583/${props.item}`; 
    const [heroe, setHeroe] = useState({
        name: " ",
        image:" ",
        powerstats:" " ,
        biography:" ",
        appearance:" ",
        work:" "
      });

      
      function handleErrors(res) {
         if (!res.ok) throw new Error(res.error);
         return res;
       }
       
const getData = async (x) =>{
      await fetch(x, {mode:'cors'})
         .then(handleErrors)  
         .then(res => res.json())
         .then(data => setHeroe(data))
         .catch(err => console.log(err))
       }


       if(props.item){
        getData(url)
       }
         
      
       
       

    return (

      <div className={`${props.className}`}>
      <ul >
              <h3> Informacion adicional </h3>
          <li>
          Peso: <span>{heroe.appearance.weight} </span> 
          </li>

          <li>
          Altura: <span>{heroe.appearance.height} </span>
          </li>

          <li>
              Fullname:<span>{heroe.biography['full-name']} </span>
          </li>

          <li>
          Color de ojos: <span>{heroe.appearance['eye-color']} </span>
          </li>

          <li>
          Color de cabello:<span>{heroe.appearance['hair-color']} </span> 
          </li>

          <li>
          Alineacion: <span>{heroe.biography.alignment} </span>
          </li>
          
          <li>
          Lugar de trabajo: <span> {heroe.work.base}</span>
          </li>
      
      </ul>

</div>
         
             
                
        
    )
}

export default FetchData
