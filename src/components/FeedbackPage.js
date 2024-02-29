import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedbackPage() {
    let nameInput = document.querySelector('#nameInput');
    let emailInput = document.querySelector('#emailInput');
    let allValid = 0;
    if(nameInput && emailInput){

        nameInput.addEventListener('input', () => {
            if(nameInput.value = ""){
                nameInput.setCustomValidity("Please enter your name.");
                document.querySelector('#nameFeedback').textContent = "Please enter your name.";
            } else{
                nameInput.setCustomValidity("");
                document.querySelector('#nameFeedback').textContent = "";
                allValid += 1;
            }
            }); 

        emailInput.addEventListener('input', () => {
            if(!emailInput.value.includes('@')){
                emailInput.setCustomValidity("Please enter your email.");
                document.querySelector('#emailFeedback').textContent = "Please enter your name.";
            } else{
                emailInput.setCustomValidity("");
                document.querySelector('#emailFeedback').textContent = "";
                allValid += 1;
            }
            }); 
    }

    let textInput = document.querySelector('#textInput');
    if(textInput){
        textInput.addEventListener('input', () => {
            if(textInput = ""){
                textInput.setCustomValidity("Please provide your feedback.");
                document.querySelector('#textFeedback').textContent = "Please provide your feedback.";
            } else{
                textInput.setCustomValidity("");
                document.querySelector('#textFeedback').textContent = "";
                allValid += 1;
            }
            }); 
    }


  return (
        <section>
            <form id="feedbackForm" class="form">
                <Link to="/home" type="exit" class="btn btn-danger mb-3">Cancel</Link>
                <h2>Help Protests Hub improve with your input!</h2>
                <div class="input-group row mb-4">
                <label for="nameInput" class="col-lg-1">Name</label>
                    <div class="col-lg-11">
                        <input type="name" id="nameInput" class="form-control" required/>
                        <div id="nameFeedback" class="invalid-feedback">Please provide a name.</div>
                    </div>
                </div>
                <div class="input-group row mb-3">
                <label for="emailInput" class="col-lg-1">Email</label>
                    <div class="col-lg-11">
                        <input type="email" id="emailInput" class="form-control" required/>
                        <div id="emailFeedback" class="invalid-feedback">Please provide a valid email.</div>
                    </div>
                </div>
                <div class="input-group row mb-3">
                <label for="feedbackInput" class="col-lg-1">Feedback</label>
                    <div class="col-lg-11">
                        <input type="textFeedback" id="textInput" class="form-control" required/>
                        <div id="textFeedback" class="invalid-feedback">Please enter your feedback.</div>
                    </div>
                </div>
                <button type="submit" id="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

/*function validateEmail() {
    let input = document.querySelector('#emailInput');
    if(input.value !== ""){
        input.setCustomValidity("");
        document.querySelector('#passwordConfirmFeedback').textContent = "";
    } else{
        input.setCustomValidity("Please enter an Email.");
        document.querySelector('.invalid-feedback').textContent = "Please enter an Email.";
    }
  }*/