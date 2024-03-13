import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';

export default function ProtestRSVP(props) {
    let protest = props.title; // set the protest title to the current protest

    let nameInput = document.querySelector('#nameInput');
    let emailInput = document.querySelector('#emailInput');
    let output = document.getElementById("registered");

    const [num, setNum] = useState(0);

    //let formData = new FormData();
    if ((nameInput && emailInput) !== null) {

        nameInput.addEventListener('input', () => {
            //this.preventDefault();
            if (nameInput.value === "") {
                document.querySelector('#nameFeedback').textContent = "Please enter your name.";
            } else {
                document.querySelector('#nameFeedback').textContent = "";
                //formData.append(nameInput);
                //output.textContent += nameInput;
            }
            }); 

        emailInput.addEventListener('input', () => {
            if (!emailInput.value.includes('@')) {
                document.querySelector('#emailFeedback').textContent = "Please enter your name.";
            } else {
                document.querySelector('#emailFeedback').textContent = "";
            }
            }); 
    }


    // not really sure why but doesn't work if I remove the status portion 
    const [status, setStatus] = useState(false);
    const handleClick = () => {
        setStatus(true);
        //setNum(num + 1);
        //output.textContent = num + " people registered";
    }

    let submitBtn = document.getElementById('submit');
    let rsvpContent = document.getElementById('content');
    if(submitBtn && status === true){
        submitBtn.addEventListener('click', () => {
            //this.preventDefault();
            if(rsvpContent !== ""){
                //setNum(num + 1);
                document.getElementById('content').textContent = "You have successfully RSVPed. You will be notified with further details if any updates are made. Otherwise, you can expect a reminder 2 days before the planned event. You may now click out of this pop-up. Thank you!";
                } 
        }); 
        setStatus(false);
    }


    // https://www.learnwithjason.dev/blog/get-form-values-as-json/
    /*function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        //const value = data.get('name');
        const value = Object.fromEntries(data.entries());
        document.getElementById('content').textContent = { value };

        console.log({ value });
      }

    const form = document.getElementById('signUpForm');
    if(form){
        form.addEventListener('submit', handleSubmit);
    }*/
    //document.getElementById('registered').innerHTML = { formData };
    
    //const form = document.getElementById('signUpForm');
    //const submitter = document.getElementById('submit');
    /*const formData = new FormData();
    if(nameInput !== null){
        formData.append("name", nameInput);
    }

    const output = document.getElementById("registered");
    output.textContent = "Registered people:";
    
    for (const [value] of formData) {
      output.textContent += `${value}\n`;
    }*/

    // might be helpful https://stackoverflow.com/questions/61840649/how-to-save-input-field-in-reactjs
    // ts file https://www.youtube.com/watch?v=OPuWlYYGDu8
    // https://www.youtube.com/watch?v=91TIUURx5JM
    const [val, setVal] = useState("");
    const click = () => {
        alert(val)
    }

    const change = (event) => {
        setVal(event.target.value)
    }

    return (
        <div>
            <Popup trigger=
                {<button className="btn btn-secondary"> RSVP </button>}
                position="top right">
                    <form className="signUpForm form">
                        <h2>RSVP For: </h2><div><h3>{protest}</h3></div>
                        <div id="content">
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
                            <button type="submit" id="submit" className="btn btn-primary" onClick={() => {click}}>Submit</button>
                        </div>
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

<button type="submit" id="submit" className="btn btn-primary" onClick={() => {setStatus(true); setNum(num + 1); document.getElementById('content').textContent = "You have successfully RSVPed. You will be notified with further details if any updates are made. Otherwise, you can expect a reminder 2 days before the planned event. You may now click out of this pop-up. Thank you!"}}>Submit</button>

*/