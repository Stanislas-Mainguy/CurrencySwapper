import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyInput from '../../molecules/CurrencyInput/CurrencyInput';
import Button from '../../atoms/Button/Button';
import './Converter.css';

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        setCurrencies([response.data.base, ...Object.keys(response.data.rates)]);
      });
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => {
        const rate = response.data.rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
      });
  };

  return (
    <div className="converter">
      <CurrencyInput
        currencies={currencies}
        selectedCurrency={fromCurrency}
        onCurrencyChange={handleFromCurrencyChange}
        amount={amount}
        onAmountChange={handleAmountChange}
      />
      <CurrencyInput
        currencies={currencies}
        selectedCurrency={toCurrency}
        onCurrencyChange={handleToCurrencyChange}
        amount={convertedAmount}
        onAmountChange={() => {}}
        readOnly={true}
      />
      <Button onClick={convertCurrency}>Convert</Button>
      {convertedAmount && <h2>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h2>}
    </div>
  );
};

export default Converter;
