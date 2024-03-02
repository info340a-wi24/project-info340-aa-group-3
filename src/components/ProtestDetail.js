import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

export default function ProtestDetail(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let title = props.title
    let info = props.info

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Read More
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {info}
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    // return (
    //     <div>
    //     <Popup trigger=
    //         {<button className="btn btn-secondary"> Read More </button>}
    //         position="top right" modal nested>
    //             {
    //                 // close => (
    //                 // <h2> {title} </h2><div><h3>{info}</h3></div>
    //                 // )
    //             }       
    //     </Popup>
    // </div>
    // )
