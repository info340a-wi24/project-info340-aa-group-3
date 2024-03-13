import React, { useEffect, useState } from 'react';
import { Row, Card, ListGroup } from 'react-bootstrap';
import ProtestRSVP from './ProtestRSVP';
import ProtestDetail from './ProtestDetail';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./Config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const database = getDatabase();
//const protestRef = database.ref(`Protests/${cardId}`);

export default function ProtestList(props) {

    // const [cards, setCards] = useState([]);

    // useEffect(() => {
    //   const cardsRef = ref(database, 'Protests');
    //     onValue(cardsRef, (snapshot) => {
    //         const cards = snapshot.val();
    //         if (cards) {
    //           setCards(Object.values(cards));
    //         }
    //       });
    //     }, []);
    let cards = props.cards;

    let protestList = cards.map((card, index) => {
        return (
            // Create variable to check start of new row
            // Use 4 out of 12 columns when getting larger
            // Have spacing between rows to be 3 units
            <div key={card.id} className="col-md-4 mb-3">
                <ProtestCard card={card} isFirst={index === 0} />
            </div>
        );
    });


    return (
        // Make sure cards are centered, and make a new row depending on number of cards
        <section>
            <Row className="justify-content-center">
                {protestList}
            </Row>
        </section>
    );
}

function ProtestCard(props) {
    let card = props.card;

    let isFirst = props.isFirst
    return (
        // Only return cards
        // To make sure that there is spacing between cards depending on start of row (on left, 3 units)
        // For Card Body: Want the buttons to be on opposite sides, want to push them apart and be flex items
        <Card className={"card" + (isFirst ? '' : 'ml-md-3')}>
            <img className="card-img-top" src={card.img} alt={card.img_alt_text} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Organized by: {card.organizer}</Card.Subtitle>
            </Card.Body>
            <ListGroup as="ul" className="list-group-flush">
                <ListGroup.Item as="li"> <span className="list-title"> Category: </span> {card.category} </ListGroup.Item >
                <ListGroup.Item as="li"> <span className="list-title"> Date: </span> {card.date} </ListGroup.Item >
                <ListGroup.Item as="li"> <span className="list-title"> Time: </span> {card.time} </ListGroup.Item >
                <ListGroup.Item as="li"> <span className="list-title"> Location: </span> {card.location_name} </ListGroup.Item >
                <ListGroup.Item as="li"> <span className="list-title"> Address: </span> {card.address} {card.city}, {card.state} {card.zip} </ListGroup.Item >
            </ListGroup>
            <Card.Body className="buttons d-flex justify-content-between"> 
                <div>
                    <ProtestDetail info={card.description} title={card.title} className="btn btn-primary" to="protest-detail">Read More</ProtestDetail>
                </div>
                <div>
                    <ProtestRSVP title={card.title} className="btn btn-secondary" to="protest-rsvp">RSVP</ProtestRSVP>
                </div>
            </Card.Body>
        </Card>

    );
}
