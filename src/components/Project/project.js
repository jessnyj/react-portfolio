import React from 'react';
import "./project.css";
import love from "../../images/loveCard.png";
import simp from "../../images/simpCard.png";
import empDir from "../../images/empCard.png";
import fitness from "../../images/fitnessCard.png";
import burger from "../../images/burgerCard.png";
import role from "../../images/role.png";

function Project() {
    return (
        <div>
            <h1 id="instructions">Click an image to learn more:</h1>
            <section className="cardHold">
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src={love} alt="loveCon"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src={simp} alt="simpGame"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src={empDir} alt="empDir"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src={fitness} alt="fitness"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src={burger} alt="burger"></img>
                        </figure>
                    </a>
                </div>
                <div className="card-image">
                    <a href="/projectExplained">
                        <figure className="image projPic">
                            <img src={role} alt="empTrack"></img>
                        </figure>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Project;