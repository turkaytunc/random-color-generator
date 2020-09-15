import React, { useState } from 'react';
import { generateNumber } from '../util/generate-number';
import './random-color.scss';

export const RandomColor = () => {
  const [colorValue, setColorValue] = useState({
    red: 200,
    green: 200,
    blue: 200,
  });

  const generateColorValue = () => {
    const redColorValue = generateNumber();
    const greenColorValue = generateNumber();
    const blueColorValue = generateNumber();

    setColorValue({
      ...colorValue,
      red: redColorValue,
      green: greenColorValue,
      blue: blueColorValue,
    });
  };

  const color = `rgb(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`;
  return (
    <div className="card-wrapper">
      <div style={{ background: color, height: '20em' }}></div>
      <div>
        <p className="color-code">{color}</p>
      </div>
      <button
        onClick={() => {
          generateColorValue();
        }}
        className="change-color-button"
      >
        Change Color
      </button>
    </div>
  );
};
