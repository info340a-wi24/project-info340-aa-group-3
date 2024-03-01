import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from 'reactjs-popup';

export default function ProtestRSVP(props) {
    let protest = props.title; // set the protest title to the current protest

    let nameInput = document.querySelector('#nameInput');
    let emailInput = document.querySelector('#emailInput');
    if(nameInput && emailInput){

        nameInput.addEventListener('input', () => {
            if(nameInput.value = ""){
                nameInput.setCustomValidity("Please enter your name.");
                document.querySelector('#nameFeedback').textContent = "Please enter your name.";
            } else{
                nameInput.setCustomValidity("");
                document.querySelector('#nameFeedback').textContent = "";
            }
            }); 

        emailInput.addEventListener('input', () => {
            if(!emailInput.value.includes('@')){
                emailInput.setCustomValidity("Please enter your email.");
                document.querySelector('#emailFeedback').textContent = "Please enter your name.";
            } else{
                emailInput.setCustomValidity("");
                document.querySelector('#emailFeedback').textContent = "";
            }
            }); 
    }

    const [elementVisible, setElementVisible] = useState(true);
    function close(){
        setElementVisible(false);
        return elementVisible;
    };

    return (
        <div>
            <Popup trigger=
                {<button className="btn btn-secondary"> RSVP </button>}
                position="top left">
                <section>
                    <form id="signUpForm" class="form">
                        <h2>RSVP For {protest}</h2>
                        <div class="input-group row mb-4">
                        <label for="nameInput" class="col-lg-1">Name</label>
                            <div class="col-lg-11">
                                <input type="name" id="nameInput" class="form-control" required title="Please enter your name."/>
                                <div id="nameFeedback" class="invalid-feedback">Please provide a name.</div>
                            </div>
                        </div>
                        <div class="input-group row mb-3">
                        <label for="emailInput" class="col-lg-1">Email</label>
                            <div class="col-lg-11">
                                <input type="email" id="emailInput" class="form-control" required title="Please enter your email."/>
                                <div id="emailFeedback" class="invalid-feedback">Please provide a valid email.</div>
                            </div>
                        </div>
                        <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                    </form>
                </section>
            </Popup>
        </div>
    )
}

/* 
Close button doesn't close the pop-up
<div id="top">
    <div> </div>
    <Link onClick={close} type="exit" class="btn btn-danger mb-3">Cancel</Link>
</div>
*/