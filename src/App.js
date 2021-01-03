import logo from './logo.svg';
import './App.css';
import Main from './login/Login';
import Dashboard from './dashboard/Dashboard';
import Test from './login/Login'
import {Router, Route} from 'react-router'

function App() {
  return (
    <Router >
      <Route exact path="/" component={Main}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      
    </Router>
  ),document.getElementById('app');
}

export default App;
