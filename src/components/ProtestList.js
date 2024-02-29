import React from 'react';
import { Row, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProtestList(props) {
    return (
    <section>
        <p class="text-center">Search Results For: "Protests in Washington"</p>
        <div class="protest-list">
        <Row className="justify-content-center">
            <div class="col-auto">
                <Card className="mt-3" style={{width: '30rem'}}>
                    {/* <img class="card-img-top" src="img/if-not-now.png" alt="Logo for If Not Now"> */}
                    <Card.Body>
                    <Card.Title>Stop Military Aid -leafletting event</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Organized by: If Not Now</Card.Subtitle>
                    </Card.Body>
                    <ListGroup as="ul" className="list-group-flush">
                        <ListGroup.Item as="li">Category: Israeli Occupation</ListGroup.Item >
                        <ListGroup.Item as="li">Date: Saturday, February 10th</ListGroup.Item >
                        <ListGroup.Item as="li">Time: 1:00-3:00 PM (PST)</ListGroup.Item >
                        <ListGroup.Item as="li">Location: PCC Community Markets - Columbia City Co-op</ListGroup.Item >
                        <ListGroup.Item as="li">Address: 3610 S Edmunds St Seattle, WA 98118</ListGroup.Item >
                    </ListGroup>
                    <Card.Body>
                        <Link className="btn btn-primary" to={`/protest-detail`}>Read More</Link>
                        <Link className="btn btn-secondary" to={`/protest-rsvp`}>RSVP</Link>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    </div>
</section>
    )
}