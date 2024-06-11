import React from 'react';
import './CurrencyInput.css';

const CurrencyInput = ({ currencies, selectedCurrency, onCurrencyChange, amount, onAmountChange, readOnly = false }) => {
  return (
    <div className="currency-input">
      <input
        type="number"
        value={amount || ""}
        onChange={onAmountChange}
        readOnly={readOnly}
      />
      <select value={selectedCurrency} onChange={onCurrencyChange}>
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
