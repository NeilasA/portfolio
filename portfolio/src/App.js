import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Projects from './Projects';

function App() {
  return (    
    <div className="App">
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
    
  );
}

export default App;
