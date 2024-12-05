import React, { useState } from 'react';
import tooltip from './TooltipTrigger.module.css';

const TooltipTrigger = ({ text, info }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleHoverOn = () => {
    setIsTooltipVisible(true);
  };

  const handleHoverOff = () => {
    setIsTooltipVisible(false);
  };

  const infoArray = info.map((item, index) => item);

  return (
    <div className={tooltip.tooltip__box}>
      <div className={tooltip.tooltip__trigger} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <p>{text}</p>
      </div>
      <div
        className={`${tooltip.tooltip} ${isTooltipVisible ? tooltip.show : ''}`}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
      >
        {infoArray}
      </div>
    </div>
  );
};

export default TooltipTrigger;
