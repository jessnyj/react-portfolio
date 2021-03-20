import React from "react";
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer";
import "./about.css"
import jessny from "../../images/jessny-grad.png";
import resume from "../../images/jessny_resume_pdf.pdf";

const About = () => {
    return (
        <div>
            <Header />
            <div id="aboutCard" className="card">
                <div className="card-content">
                    <figure id="aboutPic" className="image is-128x128">
                        <img src={jessny} alt="Jessny Grad"></img>
                    </figure>
                    <h3 id="aboutTitle" className="title is-3">About Me</h3>
                    <h4 id="aboutSub" className="subtitle is-4">Jessny Joseph</h4>
                    <div id="aboutText" className="content">
                        Hi, im Jessny! I am a full stack web developer certified
                        from UC Berkeley Extension. My interest in technology began in undergrad
                        where I studied Biochemistry and Business Administration. My educational background has
                        endowed me with valuable problem solving and interpersonal skills that allow me to be an effective
                        trouble shooter and team player as a software developer. I am very interested in contributing to emerging technologies and working
                        alongside likeminded individuals. Please feel free to contact me with any questions.
                    </div>
                    <div id="socialBtns" className="field is-grouped">
                        <p className="control btns">
                            <a href="https://www.linkedin.com/in/jessny-joseph-361515201/">
                                <button className="button is-info is-outlined socialBtn">
                                    <span className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </span>
                                    <span>LinkedIn</span>
                                </button>
                            </a>
                        </p>
                        <p className="control btns">
                            <a href="https://github.com/jessnyj">
                                <button className="button is-dark is-outlined socialBtn">
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </button>
                            </a>
                        </p>
                        <p className="control btns">
                            <a href={resume}>
                                <button className="button is-danger is-outlined socialBtn">
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                    <span>Resume</span>
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;