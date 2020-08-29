import React from 'react';
import './LayeredContact.scss';

function Contact() {
  return (    
    <div className="Contact-header" id="/contact" > 
        <div className="Contact" >
            <ul className="Contact-ul">
                <li className="Contact-li">
                    <a href="https://www.linkedin.com/in/neilas-armonas-8b2abb177/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-linkedin-square" aria-hidden="true"></span>
                    </a>
                </li>
                <li className="Contact-li">
                    <a href="https://github.com/NeilasA">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-github" aria-hidden="true"></span>
                    </a>
                </li>
                <li className="Contact-li">
                    <a href="mailto:Neilas.Armonas@gmail.com">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-envelope" aria-hidden="true"></span>
                    </a>
                </li>
            </ul>
            
        </div>   
        
    </div>     
    
  );
}

export default Contact;