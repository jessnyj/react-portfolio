import React from 'react';


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
                <a class="navbar-item" href="/">
                            Home
                        </a>
                        <a class="navbar-item" href="/projects">
                            Projects
                        </a>
                        <a class="navbar-item" href="/about">
                            About Me
                        </a>
                        <a class="navbar-item" href="/contact">
                            Contact
                        </a>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;