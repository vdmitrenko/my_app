import './style.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
    var element = document.createElement('pre');
  
    element.innerHTML = 'Hello webpack!'
  
    return element;
  }
  
  document.body.appendChild(component());