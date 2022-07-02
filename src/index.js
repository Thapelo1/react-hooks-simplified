import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassCounter from './classCounter';
import UseStateCounter from './useStateCounter';
import './public/assets/css/global.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassCounter />
    <UseStateCounter />
  </React.StrictMode>
);

