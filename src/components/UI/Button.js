// src/components/UI/Button.js
import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
