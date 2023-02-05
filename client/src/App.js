import './App.css';
import {Home, Landing, Form, Detail, NotFound } from './views/index';
import NavBar from './components/Navbar/NavBar';

import {Route, useLocation,  } from 'react-router-dom'


function App() {
  const location = useLocation()
  //es un objeto con un path que guarda en donde estoy parado
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar /> }

      <Route exact path='/' component={Landing}  />

      <Route  path='/home' render={ ()=><Home /> }  />
      <Route  path='/create' component={Form}  />
      <Route  path='/videogames/:id' component={Detail}  />
      {/* <Route exact path='*' component={Landing} /> */}


    </div>
  );
}

export default App;
