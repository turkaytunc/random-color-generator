import React, { useState } from 'react';
import { generateNumber } from '../util/generate-number';
import './random-color.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const RandomColorCard = () => {
  const [colorValue, setColorValue] = useState({
    red: 200,
    green: 200,
    blue: 200,
  });

  const [copyStatus, setCopyStatus] = useState();

  const copyDone = () => {
    setCopyStatus('Copied to clipboard');
    setTimeout(() => {
      setCopyStatus(null);
    }, 1000);
    console.log(copyStatus);
  };
  const generateColorValue = () => {
    const redColorValue = generateNumber(0, 255);
    const greenColorValue = generateNumber(0, 255);
    const blueColorValue = generateNumber(0, 255);

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
      <div
        style={{
          background: color,
          height: '25em',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
      ></div>
      <div className="copy-color">
        <p className="color-code">
          {color} {copyStatus !== null ? copyStatus : ''}
        </p>

        <CopyToClipboard
          className="clipboard-comp"
          text={color}
          onCopy={() => copyDone()}
        >
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
