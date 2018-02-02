import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);