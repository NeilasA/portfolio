import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (    
    <div className="App">
      <Navbar/>  
      <Router>  
        <Switch>  
          <Route exact path="/" exact component={LandingPage}/>   
        </Switch>
        </Router>
    </div>     
    
    
  );
}

export default App;
