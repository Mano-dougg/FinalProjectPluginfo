import React from 'react';

interface SearchIconProps {
  onClick?: () => void;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ onClick }) => (
  <svg
    onClick={onClick} width="46" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="7" stroke="#33363F" strokeWidth="2"/>
<path d="M20.5 20.5L17.5 17.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
</svg>

    )

export default SearchIcon;

// export function SearchIcon() {
//     return (
//         <svg width="46" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="11.5" cy="11.5" r="7" stroke="#33363F" strokeWidth="2"/>
// <path d="M20.5 20.5L17.5 17.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
// </svg>

//     )
// }