import React from 'react';

interface ClearIconProps {
  width?: number;
  height?: number;
  fill?: string;
  onClick?: () => void;
}

const ClearIcon: React.FC<ClearIconProps> = ({ width = 24, height = 24, fill = "#EF0F0F", onClick }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick} 
    style={{ cursor: 'pointer' }}
  >
    <path d="M11.25 3C10.8574 3 10.4561 3.1377 10.1719 3.42188C9.8877 3.70605 9.75 4.10742 9.75 4.5V5.25H5.25V6.75H6V18.75C6 19.9834 7.0166 21 8.25 21H17.25C18.4834 21 19.5 19.9834 19.5 18.75V6.75H20.25V5.25H15.75V4.5C15.75 4.10742 15.6123 3.70605 15.3281 3.42188C15.0439 3.1377 14.6426 3 14.25 3H11.25ZM11.25 4.5H14.25V5.25H11.25V4.5ZM7.5 6.75H18V18.75C18 19.166 17.666 19.5 17.25 19.5H8.25C7.83398 19.5 7.5 19.166 7.5 18.75V6.75ZM9 9V17.25H10.5V9H9ZM12 9V17.25H13.5V9H12ZM15 9V17.25H16.5V9H15Z" fill={fill}/>
  </svg>
);

export default ClearIcon;
