import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.scss';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Neilas Armonas</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li className="nav-items" key={index}>
                                <Link activeClass="active" 
                                to={item.url} 
                                className={item.cName}
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={700}>
                                 {item.title}
                                </Link>
                            </li>
                        )
                    })}            
                </ul>
            </nav>
        )
    }
}

export default Navbar