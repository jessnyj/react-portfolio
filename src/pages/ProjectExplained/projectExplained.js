import React from "react";
import Footer from "../../components/Footer/footer";
import "./projectExplained.css";
import loveCon from "../../images/loveCon.png";
import clicky from "../../images/clicky.png";
import empDir from "../../images/empCard.png";
import fitness from "../../images/fitnessCard.png";
import burger from "../../images/burger.png";
import role from "../../images/role.png";

const ProjectExplained = () => {
    return (
        // Love connect
        <section>
            <section className="hero is-large">
                <figure>
                    <img src={loveCon} alt="loveCon"></img>
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
                    <img src={clicky} alt="clicky"></img>
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
            {/* Employee Directory */}
            <section className="hero is-large">
                <figure>
                    <img src={empDir} alt="empCard"></img>
                </figure>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">
                        Employee List
                    </p>
                    <p className="subtitle">
                        This application allows a user to view their entire employee directory, filter their employees by ascending and descending order, and allows them to search for a user by name.                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <a href="https://jessnyj.github.io/employee-list/">
                                <button className="button is-info is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </span>
                                    <span>Deployed Link</span>
                                </button>
                            </a>
                        </p>
                        <p className="control">
                            <a href="https://github.com/jessnyj/employee-list">
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
            {/* Fitness Tracker */}
            <section className="hero is-large">
                <figure>
                    <img src={fitness} alt="fitnessCard"></img>
                </figure>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">
                        Fitness Track
                    </p>
                    <p className="subtitle">
                        This application allows a user to track their daily workouts. They can log multiple exercises on a specific day, track the name, type, sets, reps, and duration of exercise, and track distance traveled if they did a cardio workout.
                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <a href="https://fitness-track29.herokuapp.com/exercise">
                                <button className="button is-info is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </span>
                                    <span>Deployed Link</span>
                                </button>
                            </a>
                        </p>
                        <p className="control">
                            <a href="https://github.com/jessnyj/fitness-track">
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
            {/* Burger */}
            <section className="hero is-large">
                <figure>
                    <img src={burger} alt="burger"></img>
                </figure>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">
                        Burger
                    </p>
                    <p className="subtitle">
                        This application is a fun burger logger! You can add your favorite burger, and decide whether you want to
                        devour it or if you aren't hungry you can change your mind.
                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <a href="https://burger-eater70.herokuapp.com/">
                                <button className="button is-info is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </span>
                                    <span>Deployed Link</span>
                                </button>
                            </a>
                        </p>
                        <p className="control">
                            <a href="https://github.com/jessnyj/burger">
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
            {/* Employee Tracker */}
            <section className="hero is-large">
                <figure>
                    <img id="empTracker" src={role} alt="role"></img>
                </figure>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p className="title">
                        Employee Tracker
                    </p>
                    <p className="subtitle">
                        The employer tracker application allows a user to manage a company's employees. It allows a user to add and
                        view departments, roles, employees, as well as update employee roles.
                    </p>
                    <div className="field is-grouped">
                        <p className="control">
                            <a href="https://github.com/jessnyj/employee-tracker">
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
            <Footer />
        </section>

    );
}

export default ProjectExplained;