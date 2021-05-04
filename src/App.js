import React,{useState} from 'react';
import Hero from './Components/Hero'
import Listado from './Components/ListadoHeroes';
import Form from './Components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from './Components/Landing';
import HomeInfo from './Components/HomeInfo';
import Nav from './Components/Nav'
import './Estilos/app.scss'
import Team from './Components/HeroesTeam';
import SearchResults from './Components/SearchResults';




function App() {

  const [superHeroeData, setSuperHeroeData] = useState([]);
  const [searchText, setSearchText] = useState(''); 

    async function searchSuperHeroes(){
        const response = await fetch(`https://superheroapi.com/api/499066611225583/search/${searchText}`)
        const data = await response.json();
        
        setSuperHeroeData(data.results)
    
    
    }
    
    
    function handleChange(e){
        const searchTerm = e.target.value;
        setSearchText(searchTerm);
        if (searchTerm.length > 3){
            searchSuperHeroes()
        }
      }
  
    


  /* ---Esta funcion te manda a logearte cuando apretas ingresar en el landing---*/
 function handleclickLanding(){
   return(
     <Redirect to="/login"/> 
   )    
 }

 
  
  return (
    <div className="App">
     
    <Router>
      
      <Nav/>
      
      <Switch>            
        <Route path="/login">
         <Form/>
        </Route>

        <Route path="/buscador">
          <Listado  
          searchText={searchText} 
          handleChange={handleChange}
          /> 
          <SearchResults
          superHeroeData={superHeroeData}
          />
        </Route>

        <Route path="/home" > 
          <HomeInfo/>
          <Team
          heroe1={10}
          heroe2={202}
          heroe3={300}
          heroe4={400}
          heroe5={500}
          heroe6={600}
          
          />
        </Route>

        <Route path="/">
          <Landing onClick={handleclickLanding}/>   
        </Route>      

      </Switch>         
  
    
    
    </Router>


    


  
     
      
    </div>
  );
}

export default App;
