import React, { useState, useEffect } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import IDFormComponent from './IDForm';

function ScannerBox() {
  const [data, setData] = useState('No results');
  const [results, setResults] = useState({});

  function splitAndExtractId(input) {
    if (typeof input !== 'string' || !input.includes('||')) {
      console.error('Invalid input format');
      return null;
    }

    const parts = input.split('||');
    const id = parts[0];

    const remainingParts = parts[1].split('|');
    console.log(remainingParts);
    const name = remainingParts[0] || '';
    const birth = remainingParts[1] || '';
    const gender = remainingParts[2] || '';
    const address = remainingParts[3] || '';
    const date = remainingParts[4] || '';
    return {
      id,
      name,
      birth,
      gender,
      address,
      date,
    };
  }
  useEffect(() => {
    if (data !== 'No results') {
      const parsedResults = splitAndExtractId(data);
      setResults(parsedResults);
    }
  }, [data]);
  return (
    <div className="scanner-container">
      <div className="w-400 scanner-box">
        <h1>QR Code Scanner</h1>
        <Scanner
          onScan={(result) => {
            const rawValue = result[0].rawValue;
            setData(rawValue);
          }}
        />
      </div>
      <div className="results-box">
        <h1 id="output">{data}</h1>
      </div>
      <div className="details-box">
        <IDFormComponent data={results}></IDFormComponent>
      </div>
    </div>
  );
}

export default ScannerBox;
