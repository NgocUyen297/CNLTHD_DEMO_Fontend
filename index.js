import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let obj = {
//   'name': ' ngoc uyen',
//   'age': '18',
//   'country': 'Viet Name', 
//   'location': 'Go vap'
// }

root.render(
  <React.StrictMode>
    <App/>
    {/* <DemoApp1 /> */}
    {/* <DemoApp2/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

