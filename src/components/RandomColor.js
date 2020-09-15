import React, { useState } from 'react';
import { generateNumber } from '../util/generate-number';
import './random-color.scss';

export const RandomColor = () => {
  const [colorValue, setColorValue] = useState({ red: 0, green: 0, blue: 0 });

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

  const color = `rgb(${colorValue.red},${colorValue.green},${colorValue.blue})`;
  return (
    <div className="card-wrapper">
      <div style={{ background: color, height: '20em' }}></div>
      <p>Color-code: {color}</p>
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
