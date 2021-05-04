import React from 'react'


const Card = (props) => {
   

    return (
        <div className={props.className}>

            <h1>
                 {props.name}
            </h1>

            <img src={props.src}
                 alt={props.alt}
            />
           
            <ul>
                <li>
                    Intelligence: 
                    <span>
                        {props.intel} 
                    </span> 
                </li>
                <li>
                    Strength: 
                    <span>
                        {props.strength} 
                    </span>
                </li>
                <li>
                    Speed:
                    <span>
                        {props.speed} 
                    </span>
                </li>
                <li>
                    Durability: 
                    <span> 
                        {props.durability}
                    </span>
                </li>
                <li>
                    Power:
                    <span>
                        {props.power} 
                    </span> 
                </li>
            </ul>

            
            

        

         </div>
      );
}
 
export default Card;