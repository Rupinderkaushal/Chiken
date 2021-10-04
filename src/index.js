import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterBtn from './Components/FilterBtn/FilterBtn';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <FilterBtn/>
  </React.StrictMode>,
  document.getElementById('root')
);

