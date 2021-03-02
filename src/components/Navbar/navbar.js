import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-end">
                <Link to="/" class="navbar-item">
                            Home
                        </Link>
                        <Link to="/projects" class="navbar-item">
                            Projects
                        </Link>
                        <Link to="/about" class="navbar-item">
                            About Me
                        </Link>
                        <Link to="/contact" class="navbar-item" >
                            Contact
                        </Link>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;