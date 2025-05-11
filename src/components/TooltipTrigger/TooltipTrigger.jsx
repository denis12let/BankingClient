import React, { useState } from 'react';
import styles from './TooltipTrigger.module.css';
import { THEME, useTheme } from 'context';

const TooltipTrigger = ({ text, info }) => {
  const { theme, toggleTheme } = useTheme();

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleHoverOn = () => {
    setIsTooltipVisible(true);
  };

  const handleHoverOff = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className={styles.tooltip__box}>
      <div className={styles.tooltip__trigger} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <p className={`${styles.text} ${isTooltipVisible ? styles.show : ''} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}>
          {text}
        </p>
      </div>
      <div
        className={`${styles.tooltip} ${isTooltipVisible ? styles.show : ''} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
      >
        {info}
      </div>
    </div>
  );
};

export default TooltipTrigger;
