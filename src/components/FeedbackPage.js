import React from 'react';

export default function FeedbackPage() {
  return (
    // Please see Problem Set 6b for the form reference!
        <section>
            <form id="feedbackForm" class="form">
            <button type="exit" class="btn btn-danger">Cancel</button>
                <h2>Help Protests Hub improve with your input!</h2>
                <div class="input-group row mb-3">
                <label for="nameInput" class="col-lg-1">Name</label>
                <div class="col-lg-11">
                    <input type="name" id="nameInput" class="form-control"/>
                    <div id="nameFeedback" class="invalid-feedback">Name restriction here</div>
                </div>
                </div>
                <div class="input-group row mb-3">
                <label for="emailInput" class="col-lg-1">Email</label>
                <div class="col-lg-11">
                    <input type="email" id="emailInput" class="form-control"/>
                    <div class="invalid-feedback">Please provide a valid email</div>
                </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}