import React, { useState } from 'react';

export default function Tooltip({ text, position, children }) {
  const [visible, setVisible] = useState(false);

  // Define the base style for the tooltip
  const baseStyle = {
    position: 'absolute',
    border: '2px solid',
    zIndex: 1,
    padding: '5px', 
  };

  // Create a style object based on the position prop
  const getTooltipStyle = (position) => {
    switch (position) {
      case 'left':
        return { ...baseStyle, right: '100%', top: '50%', transform: 'translateY(-50%)' };
      case 'right':
        return { ...baseStyle, left: '100%', top: '50%', transform: 'translateY(-50%)' };
      case 'top':
        return { ...baseStyle, bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { ...baseStyle, top: '100%', left: '50%', transform: 'translateX(-50%)' };
      default:
        return baseStyle;
    }
  };

  return (
    <div style={{ height: '200px', width: '1000px', border: '2px solid', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        className='content'
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {children}

        {visible && (
          <div className="text" style={getTooltipStyle(position)}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
}
