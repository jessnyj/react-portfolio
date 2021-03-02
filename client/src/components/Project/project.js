import React from 'react';
import "./project.css";
// import pages from "../../pages/projectExplained/projectExplained";

function Project() {
    return (
        <div>
            <h1 id="instructions">Click an image to learn more:</h1>
        <section className="cardHold">
            <div className="card-image">
                <figure className="image projPic">
                    <img src="../../images/loveCard.png" alt="loveCon"></img>
                </figure>
            </div>
            <div className="card-image">
                <a href="/projectExplained">
                <figure className="image projPic">
                    <img src="../../images/simpCard.png" alt="simpGame"></img>
                </figure>
                </a>
            </div>
            <div className="card-image">
                <figure className="image projPic">
                    <img src="../../images/empCard.png" alt="empDir"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image projPic">
                    <img src="../../images/fitnessCard.png" alt="fitness"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image projPic">
                    <img src="../../images/burgerCard.png" alt="burger"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image projPic">
                    <img src="../../images/role.png" alt="empTrack"></img>
                </figure>
            </div>
        </section>
        </div>
    );
}

export default Project;