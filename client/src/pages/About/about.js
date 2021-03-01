import React from "react";
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer";
import "./about.css"

const About = () => {
    return (
        <div>
            <Header />
            <div id="aboutCard" class="card">
                <div class="card-content">
                    <figure id="aboutPic" class="image is-128x128">
                        <img src="../../images/jessny-grad.png"></img>
                    </figure>
                        <h3 id="title3" class="title is-3">About Me</h3>
                        <h4 id="title4" class="subtitle is-4">Jessny Joseph</h4>
                        <div id="aboutText" class="content">
                            Hi, im Jessny! I am a full stack web developer certified
                            from UC Berkeley Extension. My interest in technology began in undergrad
                            where I studied Biochemistry and Business. As my passion for both subjects
                            grew, I became eager to combine both interests and was introduced into the field
                            of technology. I believe that coding will allow me to achieve my goal of being an
                            entrepreneur in the field of science, and I am eager to be apart of this new field. Please
                            feel free to contact me with any questions.
                    </div>
                        <div id="socialBtns" class="field is-grouped">
                            <p class="control">
                                <a href="https://www.linkedin.com/in/jessny-joseph-361515201/">
                                    <button class="button is-info is-outlined">
                                        <span class="icon">
                                            <i class="fab fa-linkedin-in"></i>
                                        </span>
                                        <span>LinkedIn</span>
                                    </button>
                                </a>
                            </p>
                            <p class="control">
                                <a href="https://github.com/jessnyj">
                                    <button class="button is-dark is-outlined">
                                        <span class="icon">
                                            <i class="fab fa-github"></i>
                                        </span>
                                        <span>GitHub</span>
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