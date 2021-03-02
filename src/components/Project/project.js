import React from 'react';
import "./project.css";

function Project() {
    return (
        <div>
            <h1 id="instructions">Click an image to learn more:</h1>
            <section className="cardHold">
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src="../../images/loveCard.png" alt="loveCon"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src="../../images/simpCard.png" alt="simpGame"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src="../../images/empCard.png" alt="empDir"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src="../../images/fitnessCard.png" alt="fitness"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src="../../images/burgerCard.png" alt="burger"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src="../../images/role.png" alt="empTrack"></img>
                        </figure>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Project;