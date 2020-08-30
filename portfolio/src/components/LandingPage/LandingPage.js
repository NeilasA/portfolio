import React from 'react';
import './landingPage.scss';
import Slider from '../Carousel/Slider';
import Contact from '../GetInTouch/LayeredContactButton';


function LandingPage() {
    return (    
    <div className="LandingPage" >  
     <div className="color-overlay"></div>  
        <header className="LandingPage-header"  >
          <h3 className="LandingPage-text" id="/">
            Hello, I'am
            <p className="MainText"> Neilas Armonas </p> 
            - Aspiring Problem Solver I.e 
            <p className="MainText"> Software Developer. </p> 
          </h3>
          <h3 className="PageTextAboutMe">_About Me:</h3> 
          <p className="AboutMe" id="/aboutMe">"Take up one idea. Make that one idea your life--
          think of it, dream of it, live on that idea. Let the 
          brain, muscles, nerves, every part of your body, 
          be full of that idea, and just leave every 
          other idea alone. This is the way to success." 
          --Swami Vivekananda</p>
        </header>  
        <div>
          <h1 className="PageText" >_Projects</h1>
          <Slider/> 
        </div> 
          <h1 className="PageText" id="/contact">_Get In Touch</h1>
        <Contact/>
      </div>
      
    );
  }
  
  export default LandingPage;