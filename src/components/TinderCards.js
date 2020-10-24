import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import db from "../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="tinderCards">
      {people.length ? (
        <div className="tinderCard__container">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up, down"]}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.imageUrl})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
          <h3>Ooops.. No more swipes</h3>
        </div>
      ) : (
        <div className="tinderCard__loading">
          <h3>Wait a sec...</h3>
        </div>
      )}
    </div>
  );
}

export default TinderCards;
