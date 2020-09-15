import React from 'react';
import { generateNumber } from '../util/generate-number';
import './random-color.scss';

export const RandomColor = () => {
  const redColorValue = generateNumber();
  const greenColorValue = generateNumber();
  const blueColorValue = generateNumber();
  const color = `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;
  return (
    <div className="card-wrapper">
      <div style={{ background: color, height: '10vh' }}></div>
    </div>
  );
};
