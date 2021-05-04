//--estilos
import './Estilos/app.scss'
//--imports
import React,{useState} from 'react';
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
import Nav from './Components/Nav';
import Team from './Components/HeroesTeam';
import SearchResults from './Components/SearchResults';




function App() {
  
  const [info, setInfo] = useState({
    name: " ",
    image:" ",
    powerstats:" " ,
    biography:" ",
    appearance:" ",
    work:" "
  });
  const [superHeroeData, setSuperHeroeData] = useState([]);
  const [searchText, setSearchText] = useState(''); 

    async function searchSuperHeroes(){
        const response = await fetch(`https://superheroapi.com/api/499066611225583/search/${searchText}`)
        const data = await response.json();
        
        setSuperHeroeData(data.results);
        
        
    
    }
    /* function agregarId(a){
      let  url = `https://superheroapi.com/api/499066611225583/${a}`;
      getData(url);
    }   */
    
    function handleErrors(res) {
      if (!(res.ok)) throw new Error(res.error);
      return res;
    }
    
     function getData(url){
      fetch(url)
      .then(handleErrors)   
      .then(res => res.json())
      .then(data => setInfo(data))    
      .catch(err => console.log(err));     
      
  
      }
    

    function handleChange(e){
        const searchTerm = e.target.value;
        setSearchText(searchTerm);
        if (searchTerm.length > 3){
            searchSuperHeroes()
        }
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
          /* agregarId={agregarId} */
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
          info={info}          
          
          />
        </Route>

        <Route path="/">
          <Landing onClick={<Redirect to="/login"/>}/>   
        </Route>      

      </Switch>         
  
    
    
    </Router>


    


  
     
      
    </div>
  );
}

export default App;
