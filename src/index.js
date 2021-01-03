import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './login/Login';
import Test from './login/Login'
import AddExpense from './add-expense/AddExpense'
import Dashboard from './dashboard/Dashboard'


ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Main />
    
    {/* <Dashboard /> */}
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
