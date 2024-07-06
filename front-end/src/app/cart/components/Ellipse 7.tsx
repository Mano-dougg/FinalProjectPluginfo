import React from 'react';

const ElipseComponent: React.FC<{ width?: number; height?: number }> = ({ width = 15, height = 15 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="7.5" r="7" fill="#D6C9C9" stroke="black" />
    </svg>
  );
};

export default ElipseComponent;
