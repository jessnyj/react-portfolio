import React from "react";
import Footer from "../../components/Footer/footer";

const ProjectExplained = () => {
    return (
        // Love connect
        <section>
            <section className="hero is-large">
                <figure>
                    <img src="../../images/loveCon.png" alt="loveCon"></img>
                </figure>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">
                        Love Connect
                    </p>
                    <p className="subtitle">
                        Love Connect is a full stack, mobile responsive, dating application that allows users
                        to match based off of their interests. When a user enters the site, they are able to log in, or sign up for
                        an account, select their interests, upload and edit their bio, find other users based off of their interests, and match with others.
                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <a href="https://loveconnect14.herokuapp.com/">
                                <button className="button is-info is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </span>
                                    <span>Deployed Link</span>
                                </button>
                            </a>
                        </p>
                        <p className="control">
                            <a href="https://github.com/prophetrand/project-2-team-3">
                                <button className="button is-dark is-outlined">
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            {/* ClickyGame */}
            <section className="hero is-large">
                <figure>
                    <img src="../../images/clicky.png" alt="clicky"></img>
                </figure>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">
                        The Simpsons Game
                    </p>
                    <p className="subtitle">
                        This application is a click game that allows you to test your memory skills! Upon entering the site, you are provided with 12 images which you can click but not more than once. Your score is being tracked as well as the top score.
                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <a href="https://jessnyj.github.io/click-game/">
                                <button className="button is-info is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </span>
                                    <span>Deployed Link</span>
                                </button>
                            </a>
                        </p>
                        <p className="control">
                            <a href="https://github.com/jessnyj/click-game">
                                <button className="button is-dark is-outlined">
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </section>

    );
}

export default ProjectExplained;