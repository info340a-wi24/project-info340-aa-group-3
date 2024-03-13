import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Modal, Button } from 'react-bootstrap';

export default function ProtestRSVP(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false); // State to track form validation
    const [showSuccessModal, setShowSuccessModal] = useState(false); // State to track success modal visibility

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }
        if (!email.includes('@')) {
            alert('Please enter a valid email.');
            return;
        }
        // If form is valid, set isValid to true and show success modal
        setIsValid(true);
        setShowSuccessModal(true);
    };

    const closePopup = () => {
        setName(''); // Reset form values
        setEmail('');
        setIsValid(false); // Reset validation state
        setShowSuccessModal(false); // Reset success modal state
    };

    return (
        <Popup
            trigger={<button className="btn btn-secondary"> RSVP </button>}
            position="top right"
        >
            {(close) => (
                <div className="popup-content">
                    <form className="signUpForm form" onSubmit={handleSubmit}>
                        <h2>RSVP For: </h2>
                        <div>
                            <h3>{props.title}</h3>
                        </div>
                        <div id="content">
                            <div className="input-group row mb-4">
                                <label htmlFor="nameInput" className="col-lg-1">
                                    Name
                                </label>
                                <div className="col-lg-11">
                                    <input
                                        type="text"
                                        id="nameInput"
                                        className="form-control"
                                        required
                                        title="Please enter your name."
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                            </div>
                            <div className="input-group row mb-3">
                                <label htmlFor="emailInput" className="col-lg-1">
                                    Email
                                </label>
                                <div className="col-lg-11">
                                    <input
                                        type="email"
                                        id="emailInput"
                                        className="form-control"
                                        required
                                        title="Please enter your email."
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                    <Modal show={showSuccessModal} onHide={closePopup}>
                        <Modal.Header closeButton>
                            <Modal.Title>RSVP Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your RSVP was successful!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closePopup}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </Popup>
    );
}