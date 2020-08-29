import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App container pt-4">
      <h1 className="text-center mb-4">Boilerplate</h1>
      <div className="col-6 text-center">
        <div className="form-row mt-3">
          <input className="form-control col" type="text" />
          <button className="btn btn-custom-color ml-2">Custom button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
