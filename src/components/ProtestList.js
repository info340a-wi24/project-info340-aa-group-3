import React, { useEffect, useState } from 'react';
import {Row, Card, ListGroup, Button} from 'react-bootstrap';
import ProtestRSVP from './ProtestRSVP';
import ProtestDetail from './ProtestDetail';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./Config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = getDatabase();
//const protestRef = database.ref(`Protests/${cardId}`);

export default function ProtestList(props) {
    //let cards = props.cards;

    const [cards, setCards] = useState([]);

    useEffect(() => {
      const cardsRef = ref(database, 'Protests');
        onValue(cardsRef, (snapshot) => {
            const cards = snapshot.val();
            if (cards) {
              setCards(Object.values(cards));
            }
          });
        }, []);

    let protestList = cards.map((card) => {
        return <ProtestCard key={card} card={card}/>;
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
    //Create and set the likes variable that will show up on the card
    //let [likes, setLikes] = useState(props.initialLikes);

    return (
        <Row className="justify-content-center">
            <div className="col-auto">
                <Card className="mt-3 cardStyle">
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
                        <ListGroup.Item as="li"> <span className = "list-title"> Address: </span> {card.address} {card.city}, {card.state} {card.zip} </ListGroup.Item >
                    </ListGroup>
                    <Card.Body className="buttons">
                        <ProtestDetail info={card.description} title={card.title} className="btn btn-primary" to="protest-detail">Read More</ProtestDetail>
                        <ProtestRSVP title={card.title} className="btn btn-secondary" to="protest-rsvp">RSVP</ProtestRSVP> 
                        {/* <Button onClick={handleLike}>
                            Like ({likes})
                        </Button> */}
                    </Card.Body>
                </Card>
            </div>
        </Row>
    );
 
}