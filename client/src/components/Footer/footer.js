import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="buttons">
                    <button className="button">
                        <span className="icon is-small">
                            <i className="fab fa-github"></i>
                        </span>
                    </button>
                    <button className="button">
                        <span className="icon is-small">
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                    </button>
                    <button className="button">
                        <span className="icon is-small">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </button>
                </p>
            </div>
        </footer>

    );
}


export default Footer;