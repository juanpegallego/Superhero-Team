//--estilos
import './Estilos/app.scss'
//--imports
import React,{useState} from 'react';
import Buscador from './Components/Buscador';
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
import Hero from './Components/Hero';



function App() {
  const [info, setInfo] = useState({
    id:" ",
    name: " ",
    image:" ",
    powerstats:" " ,
    biography:" ",
    appearance:" ",
    work:" "
  });
  const [superHeroeData, setSuperHeroeData] = useState([]);
  const [arrayTeam, setArrayTeam] = useState([])
  const [searchText, setSearchText] = useState('');  
  const loguearse = () => {window.location ='/login'; }
  const chequeoConstante = () => { setInterval(chequeoInicialToken, 10000)} 
  const chequeoInicialToken = () => {
    if (!(window.localStorage.getItem('tokenId'))){    
        alert('no estas logueado, seras redirigido');
        setTimeout(loguearse, 2000)
      }
    }
window.onload = setTimeout(chequeoConstante, 5000);
  
  

    
  

  //------- Buscador------
    async function searchSuperHeroes(){
        await fetch(`https://superheroapi.com/api/499066611225583/search/${searchText}`, {
          mode:'cors'})
          .then(handleErrors)
          .then(res => res.json())
          .then(data => setSuperHeroeData(data.results))
          .catch(err => console.log(err));     
    }
    function handleChange(e){
      const searchTerm = e.target.value;
      setSearchText(searchTerm);
      if (searchTerm.length > 3){searchSuperHeroes()}
    }
     
    //---------- H O M E --------
    function handleErrors(res) {
      if (!(res.ok)) throw new Error(res.error);
      return res;
    }
    
     async function getData(url){
      await fetch(url, {mode:'cors'})
      .then(handleErrors)   
      .then(res => res.json())
      .then(data => setInfo(data))    
      .catch(err => console.log(err));     
      
      }
      function agregarId(team){    
        setArrayTeam(team)  
        if (!(team.length === 0)){
          let  url = `https://superheroapi.com/api/499066611225583/${team}`;
          getData(url); 
          
          
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
          <Buscador  
          /* agregarId={agregarId} */
          searchText={searchText} 
          handleChange={handleChange}
          /> 
          <SearchResults
          superHeroeData={superHeroeData}
          agregarId={agregarId}
          />
        </Route>

        
        <Route path="/home" > 
          <HomeInfo/>
          <Team
          info={info} 
          arrayTeam={arrayTeam}     
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
