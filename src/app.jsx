import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);