// import Log from './log';
// import Calc from "./calc";
// import img from './logo512.png';
//
// const calculation = new Calc();
// const loging = new Log();
//
// loging.log(calculation.add(1, 2, 3));
//
// const el = document.createElement('img');
// el.src = img;
// document.body.appendChild(el);

import React from 'react';
import ReactDOM from 'react-dom';
import './main.sass';

// console.log(css.toString());

const App = () => <p>This is React App</p>;

ReactDOM.render(<App/>, document.getElementById('root'));