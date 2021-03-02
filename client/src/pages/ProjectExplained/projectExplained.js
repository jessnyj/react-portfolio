import React from "react";
import Footer from "../../components/Footer/footer";

const ProjectExplained = () => {
    return (
        <section>
            <section className="hero is-medium is-link">
                <figure>
                    <img src="loveCon.png" alt="loveCon"></img>
                </figure>
            </section>
            <section className="hero is-medium is-link">
                <div className="hero-body">
                    <p className="title">
                        Love Connect
                    </p>
                    <p className="subtitle">
                        Love Connect is a full stack, mobile responsive, dating application that allows users
                        to match based off of their interests. When a user enters the site, they are able to log in, or sign up for
                        an account, select their interests, upload and edit their bio, find other users based off of their interests, and match with others.
                    </p>
                </div>
            </section>
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
        </section>
    );
}

export default ProjectExplained;