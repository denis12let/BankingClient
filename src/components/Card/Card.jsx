import React from 'react';
import card from './Card.module.css';
import { THEME, useTheme } from 'context';

const Card = ({ children, styles }) => {
  const { theme } = useTheme();

  return (
    <div className={`${card.cardLayout} ${theme === THEME.LIGHT ? card.light : card.dark}`} style={styles}>
      {children}
    </div>
  );
};

export default Card;
