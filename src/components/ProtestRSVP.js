import React from 'react';
// import { useState } from 'react';
import Popup from 'reactjs-popup';

export default function ProtestRSVP(props) {
    let protest = props.title; // set the protest title to the current protest

    let nameInput = document.querySelector('#nameInput');
    let emailInput = document.querySelector('#emailInput');
    if (nameInput && emailInput) {

        nameInput.addEventListener('input', () => {
            if (nameInput.value === "") {
                nameInput.setCustomValidity("Please enter your name.");
                document.querySelector('#nameFeedback').textContent = "Please enter your name.";
            } else {
                nameInput.setCustomValidity("");
                document.querySelector('#nameFeedback').textContent = "";
            }
            }); 

        emailInput.addEventListener('input', () => {
            if (!emailInput.value.includes('@')) {
                emailInput.setCustomValidity("Please enter your email.");
                document.querySelector('#emailFeedback').textContent = "Please enter your name.";
            } else {
                emailInput.setCustomValidity("");
                document.querySelector('#emailFeedback').textContent = "";
            }
            }); 
    }

    // const [elementVisible, setElementVisible] = useState(true);
    // function close(){
    //     setElementVisible(false);
    //     return elementVisible;
    // };
    
    return (
        <div>
            <Popup trigger=
                {<button className="btn btn-secondary"> RSVP </button>}
                position="top left">
                    <form id="signUpForm" className="form">
                        <h2>RSVP For: </h2><div><h3>{protest}</h3></div>
                        <div className="input-group row mb-4">
                        <label for="nameInput" className="col-lg-1">Name</label>
                            <div className="col-lg-11">
                                <input type="name" id="nameInput" className="form-control" required title="Please enter your name."/>
                                <div id="nameFeedback" className="invalid-feedback">Please provide a name.</div>
                            </div>
                        </div>
                        <div className="input-group row mb-3">
                        <label for="emailInput" className="col-lg-1">Email</label>
                            <div className="col-lg-11">
                                <input type="email" id="emailInput" className="form-control" required title="Please enter your email."/>
                                <div id="emailFeedback" className="invalid-feedback">Please provide a valid email.</div>
                            </div>
                        </div>
                        <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                    </form>
            </Popup>
        </div>
    )
}

/* 
Close button doesn't close the pop-up
<div id="top">
    <div> </div>
    <Link onClick={close} type="exit" className="btn btn-danger mb-3">Cancel</Link>
</div>
*/