import ScannerBox from './components/Scanner';
// import ScanImage from './components/ScanImage';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [camera, setCamera] = useState(false);
  // const [file, setFile] = useState(false);

  // const handleFile = (e) => {
  //   setFile((file) => !file);
  // };

  const handleCamera = (e) => {
    setCamera((camera) => !camera);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleCamera}>
          {!camera ? 'Open Camera' : 'Close Camera'}
        </button>
        {camera && <ScannerBox />}
      </div>

      {/* <button onClick={handleFile}>Choose File</button> */}
      {/* {file && <ScanImage />} */}
    </div>
  );
}

export default App;
