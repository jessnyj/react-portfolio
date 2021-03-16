import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarExampleTransparentExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
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