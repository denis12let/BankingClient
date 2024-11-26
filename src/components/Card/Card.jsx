import React from 'react';
import card from './Card.module.css';

const Card = ({ children, styles }) => {
  return (
    <div className={card.cardLayout} style={styles}>
      {children}
    </div>
  );
};

export default Card;
