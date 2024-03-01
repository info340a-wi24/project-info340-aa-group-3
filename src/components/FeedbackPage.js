import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedbackPage() {
    let form = document.querySelector('form');
    if(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if(form.checkValidity()){
                form.classList.add('was-validated');
                console.log("Checked Validity");
            } else{
                document.getElementById('submit').disabled = true;
            }
            }); 
    }

    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    if(nameInput && emailInput){
        nameInput.addEventListener('input', () => {
            if(nameInput.value = ""){
                nameInput.setCustomValidity("Please enter your name.");
                document.getElementById('nameFeedback').textContent = "Please enter your name.";
            } else{
                nameInput.setCustomValidity("");
                document.getElementById('nameFeedback').textContent = "";
            }
            }); 

        emailInput.addEventListener('input', () => {
            if(!emailInput.value.includes('@')){
                emailInput.setCustomValidity("Please enter your email.");
                document.getElementById('emailFeedback').textContent = "Please enter your name.";
            } else{
                emailInput.setCustomValidity("");
                document.getElementById('emailFeedback').textContent = "";
            }
            }); 
    }

    let textInput = document.getElementById('textInput');
    if(textInput){
        textInput.addEventListener('input', () => {
            if(textInput = ""){
                textInput.setCustomValidity("Please provide your feedback.");
                document.getElementById('textFeedback').textContent = "Please provide your feedback.";
            } else{
                textInput.setCustomValidity("");
                document.getElementById('textFeedback').textContent = "";
            }
            }); 
    }

    let allInput = document.querySelectorAll('input');
    allInput.forEach((input) => {
        input.addEventListener('input', () => {
            if(form.classList.contains('was-validated')){
                document.getElementById('submit').disabled = true;
            } else{
                document.getElementById('submit').disabled = false;
            }
        });
    });

  return (
        <section>
            <form id="feedbackForm" class="form">
                <div id="top">
                    <div> </div>
                    <Link to="/home" type="exit" class="btn btn-danger mb-3">Cancel</Link>
                </div>
                <h2>Help Protests Hub improve with your input!</h2>
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
                <div class="input-group row mb-3">
                <label for="feedbackInput" class="col-lg-1">Feedback</label>
                    <div class="col-lg-11">
                        <input type="textFeedback" id="textInput" class="form-control" required title="Please enter your feedback."/>
                        <div id="textFeedback" class="invalid-feedback">Please enter your feedback.</div>
                    </div>
                </div>
                <button type="submit" id="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}
