import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';



// import NavbarForm from './components/NavbarForm';
// import Navbars from './components/Navbars';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

