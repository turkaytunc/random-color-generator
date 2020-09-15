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
  const clipboardRef = useRef(null);

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

  const copyToClipboard = (e) => {
    clipboardRef.current.select();
    document.execCommand('copy');
  };

  const color = `rgb(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`;
  return (
    <div className="card-wrapper">
      <div style={{ background: color, height: '20em' }}></div>
      <div>
        <p ref={clipboardRef} className="color-code">
          {color}
        </p>
        <button>
          <CopyToClipboard text={color}>
            <span>Copy to clipboard</span>
          </CopyToClipboard>
        </button>
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
