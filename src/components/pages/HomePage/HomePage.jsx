import React from 'react';
import MainTemplate from '../../template/MainTemplate/MainTemplate';
import Converter from '../../organisms/Converter/Converter';
import './HomePage.css';

const HomePage = () => {
  return (
    <MainTemplate>
      <h1>Currency Converter</h1>
      <Converter />
    </MainTemplate>
  );
};

export default HomePage;
