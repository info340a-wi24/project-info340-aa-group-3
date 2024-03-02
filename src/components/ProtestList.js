import React from 'react';
import {Row, Card, ListGroup} from 'react-bootstrap';
import ProtestRSVP from './ProtestRSVP';
import ProtestDetail from './ProtestDetail';

export default function ProtestList(props) {
    let cards = props.cards;
    let protestList = cards.map((card) => {
        return <ProtestCard key={card.title} card={card} />;
    })

    return (
    <section>
        <div className="protest-list">
            {protestList}
        </div>
    </section>
    )
}

function ProtestCard(props) {
    let card = props.card;

    return (
        <Row className="justify-content-center">
            <div className="col-auto">
                <Card className="mt-3" style={{width: '30rem'}}>
                    <img className="card-img-top" src={card.img} alt={card.img_alt_text} />
                    <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Organized by: {card.organizer}</Card.Subtitle>
                    </Card.Body>
                    <ListGroup as="ul" className="list-group-flush">
                        <ListGroup.Item as="li"> <span className = "list-title"> Category: </span> {card.category} </ListGroup.Item >
                        <ListGroup.Item as="li"> <span className = "list-title"> Date: </span> {card.date} </ListGroup.Item >
                        <ListGroup.Item as="li"> <span className = "list-title"> Time: </span> {card.time} </ListGroup.Item >
                        <ListGroup.Item as="li"> <span className = "list-title"> Location: </span> {card.location_name} </ListGroup.Item >
                        <ListGroup.Item as="li"> <span className = "list-title"> Address: </span> {card.address} </ListGroup.Item >
                    </ListGroup>
                    <Card.Body className="buttons">
                        <ProtestDetail info={card.description} title={card.title} className="btn btn-primary" to="protest-detail">Read More</ProtestDetail>
                        <ProtestRSVP title={card.title} className="btn btn-secondary" to="protest-rsvp">RSVP</ProtestRSVP> 
                    </Card.Body>
                </Card>
            </div>
        </Row>
    );
 
}