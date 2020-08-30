import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Particles from 'react-particles-js';

function App() {
  return (    
    <div className="App">
      <Navbar/>  
      <Particles className="particles"
        params={{
          "particles": {
              "number": {
                  "value": 100,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 1
              },
              "move": {
                  "direction": "right",
                  "speed": 1
              },
              "size": {
                  "value": 5
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1.5,
                      "opacity_min": 0.5
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
      }} />
      <Router>  
        <Switch>  
          <Route exact path="/" component={LandingPage}/>   
        </Switch>
        </Router>
    </div>     
    
    
  );
}

export default App;
