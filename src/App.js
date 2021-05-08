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




function App() {
  const [arrayTeam, setArrayTeam] = useState([])  
  const [superHeroeData, setSuperHeroeData] = useState([]);
  const [searchText, setSearchText] = useState('');    
  const loguearse = () => {window.location ='/login'; }
  const chequeoConstante = () => { setInterval(chequeoInicialToken, 10000)} 
  const chequeoInicialToken = () => {
    if (!(window.localStorage.getItem('tokenId'))){    
        alert('no estas logueado, seras redirigido');
        setTimeout(loguearse, 2000)
      }
    }
/* window.onload = setTimeout(chequeoConstante, 5000); */
  
  

    
  

  //------- Buscador------
    const searchSuperHeroes = async () =>{
        await fetch(`https://superheroapi.com/api/499066611225583/search/${searchText}`, {
          mode:'cors'})
          .then(response => {
            if (!response.ok) throw Error(response.status);
            return response
          })
          .then(handleErrors)
          .then(res => res.json())
          .then(data => chequearData(data.results))
          .catch(err => console.log(err));     
    }

    function chequearData(data){
      if (!(data === undefined)){
        
        setSuperHeroeData(data)
      }
      
    }
    function handleChange(e){
      const searchTerm = e.target.value;
      setSearchText(searchTerm);
      if (searchTerm.length > 2){searchSuperHeroes()}
    }
     
    //---------- H O M E --------
    
  function handleErrors(res) {
      if (!(res.ok)) throw new Error(res.error);
      return res;
    } 
    
  function agregarId(a){    
    a.map(item => {
      setArrayTeam([...arrayTeam, item]);
         
          })}    
        
        
       


        
        
       
    
      
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
          searchText={searchText} 
          handleChange={handleChange}
          /> 
          <SearchResults
          agregarId={agregarId}  
          superHeroeData={superHeroeData}
          arrayTeam = {arrayTeam}
          />
        </Route>

        
        <Route path="/home" > 
          
          <Team 
          superHeroeData={superHeroeData}
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
