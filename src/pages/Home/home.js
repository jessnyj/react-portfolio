import React, { Component } from "react";
import "./home.css";

class Home extends Component {
    componentDidMount() {
        setTimeout(function () {
            var element = document.getElementById("desc");
            element.style.visibility = "visible";
            element.classList.add("animate__animated", "animate__fadeInDown")
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1 id="name" className="animate__animated animate__fadeInDown">
                    <span role="img" aria-label="sheep">👋 </span>
                    Hi, I'm Jessny.</h1>
                <p id="desc">I am a full stack web developer interested in the convergence between biological systems and emerging
            technologies. Feel free to look at my most recent projects.</p>
            </div>
        );
    }
}

export default Home;