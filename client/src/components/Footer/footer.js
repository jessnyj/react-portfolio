import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="buttons footerBtns">
                    <a href="https://github.com/jessnyj">
                        <button className="button is-medium footerBtn">
                            <span className="icon is-small">
                                <i className="fab fa-github"></i>
                            </span>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/jessny-joseph-361515201/">
                        <button className="button is-medium footerBtn">
                            <span className="icon is-small">
                                <i className="fab fa-linkedin-in"></i>
                            </span>
                        </button>
                    </a>
                    <a href="mailto:jessnyjoseph@gmail.com">
                        <button className="button is-medium footerBtn">
                            <span className="icon is-small">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </button>
                    </a>
                </p>
            </div>
        </footer>

    );
}


export default Footer;