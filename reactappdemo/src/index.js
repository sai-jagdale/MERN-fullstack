import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Web Vitals are a set of metrics from Google that quantify the user 
// experience (UX) of a webpage, focusing on loading performance, 
// interactivity, and visual stability. In React.js applications, 
// they can be measured using the official web-vitals library and 
// optimized using specific React-centric strategies
import reportWebVitals from './reportWebVitals';


// React Virtual DOM  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{ color: 'blue' }} >Wellcome to React</h1>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
