import React from 'react';
import "./project.css";

function Project() {
    return (
        <section>
            <div className="card-image">
                <figure className="image">
                    <img src="../../images/loveCard.png" alt="loveCon"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src="../../images/simpCard.png" alt="simpGame"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src="../../images/empCard.png" alt="empDir"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src="../../images/fitnessCard.png" alt="fitness"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src="../../images/burgerCard.png" alt="burger"></img>
                </figure>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src="../../images/role.png" alt="empTrack"></img>
                </figure>
            </div>
        </section>
    );
}

export default Project;