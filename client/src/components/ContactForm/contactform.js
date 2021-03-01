import React from 'react';
import "./contactform.css";
import Footer from "../Footer/footer";

function ContactForm() {
    return (
        <div>
            <div id="contactCard" className="card">
                <div className="card-content">
                    <h3 className="title is-3">Contact Me</h3>
                    <form action="https://formspree.io/f/meqpwlrb" method="POST">
                        <div className="field email">
                            <div className="control has-icons-left has-icons-right">
                                <label>Email:<input className="input is-success" placeholder="Email input" type="text" name="_replyto"></input></label>
                            </div>
                        </div>

                        <div id="msg" className="field">
                            <div className="control">
                                <label>
                                    Message:
                                <textarea className="textarea" placeholder="Textarea" name="message"></textarea>
                                </label>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button type="submit" id="submitBtn" className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <a href="/contact">
                                    <button className="button is-link is-light">Cancel</button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default ContactForm;