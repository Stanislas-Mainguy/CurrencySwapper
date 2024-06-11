import React from 'react';
import './MainTemplate.css';

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      {children}
    </div>
  );
};

export default MainTemplate;
