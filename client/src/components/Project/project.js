import React from 'react';
import "./project.css";

function Project() {
    return (
        // <div classNameName="card">
        //     <div className="card-image">
        //         <figure className="image is-4by3">
        //             <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        //         </figure>
        //     </div>
        // </div>
        <section>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="lovCon"></img>
                    </figure>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Foo</p>
                        <p className="subtitle">Bar</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Third column</p>
                        <p className="subtitle">With some content</p>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Hello World</p>
                        <p className="subtitle">What is up?</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Foo</p>
                        <p className="subtitle">Bar</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Third column</p>
                        <p className="subtitle">With some content</p>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
            </div>
            <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
            </figure>
        </section>
    );
}

export default Project;