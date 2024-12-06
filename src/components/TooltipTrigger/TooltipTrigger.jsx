import React, { useState } from 'react';
import styles from './TooltipTrigger.module.css';

const TooltipTrigger = ({ text, info }) => {
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
        <p className={styles.text}>{text}</p>
      </div>
      <div
        className={`${styles.tooltip} ${isTooltipVisible ? styles.show : ''}`}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
      >
        {info}
      </div>
    </div>
  );
};

export default TooltipTrigger;
