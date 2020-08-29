import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Projects from './Projects';
=======
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Contact from './components/GetInTouch/LayeredContactButton';
>>>>>>> Stashed changes

function App() {
  return (    
    <div className="App">
<<<<<<< Updated upstream
    <div className="color-overlay"></div>
    <Router>
      <Navbar/> 
      <Route path="/projects" component={Projects}/>    
    </Router>
      <header className="App-header">
        <p class="line anim-typewriter">
          Neilas Armonas
        </p>
        <p>
        Aspiring Software Developer
        </p>        
      </header>
    </div>
=======
      <Navbar/>    
        <Switch>  
          <Route exact path="/" exact component={LandingPage}/>   
          <Route exact path="/contact" exact component={Contact}/> 
        </Switch>
    </div>     
  </Router>
>>>>>>> Stashed changes
    
  );
}

export default App;
