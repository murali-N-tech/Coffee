// Generic Card component 
import React from 'react';

const Card = ({ children, className = '', onClick, ...props }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm border border-coffee-100 p-6 transition-all duration-300 hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;