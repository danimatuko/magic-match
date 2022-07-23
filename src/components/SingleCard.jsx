import React from "react";
import "../styles/single-card.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src={"/img/cover.png"}
          alt="card-front"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
