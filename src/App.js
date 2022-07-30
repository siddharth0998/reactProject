import logo from './logo.svg';
import './App.css';
import data from './Display.js';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {

  const [clearValue,setValue] = useState(false);
   
    return (
      <div>
          <button onClick={() => setValue(true)}>ShoW Data</button>
          <button onClick={() => setValue(false)}>Hide Data</button>
          {
            data.map((x) => {
              return (
                <div>
                  {
                    clearValue && <div>
                      <h3>{x.id}</h3>
                      <h3>{x.name}</h3>
                      <h3>{x.age}</h3>
                      <img src={x.image} />
                    </div> 
                  }
                </div>
              )
            })
          }
        
      </div>
    )
 
}

export default App;
