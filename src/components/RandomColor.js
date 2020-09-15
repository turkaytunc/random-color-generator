import React, { useState, useRef } from 'react';
import { generateNumber } from '../util/generate-number';
import './random-color.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
      <div className="copy-color">
        <p className="color-code">{color}</p>

        <CopyToClipboard className="clipboard-comp" text={color}>
          <img
            height="32px"
            src={`${process.env.PUBLIC_URL}/static-files/clipboard-icon.png`}
            alt="clipboard"
          />
        </CopyToClipboard>
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
