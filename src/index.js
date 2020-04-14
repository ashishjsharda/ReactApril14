import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props)
{
  return <h1> Hello {props.nme}</h1>
}

function App(){
  return (<div>
    <Welcome nme="Ankit" />
    <Welcome nme="Rohit" />
    <Welcome nme="Hritik" />
  </div>);
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

