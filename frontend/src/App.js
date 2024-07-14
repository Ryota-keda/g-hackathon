import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './components/Login';
import ElderlyHome from './components/ElderlyHome';
import CaregiverHome from './components/CaregiverHome';
import ElderlyManagement from './components/ElderlyManagement';
import CaregiverManagement from './components/CaregiverManagement';
import Payment from './components/Payment';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/login" component={Login} />
          <Route path="/elderly-home" component={ElderlyHome} />
          <Route path="/caregiver-home" component={CaregiverHome} />
          <Route path="/elderly-management" component={ElderlyManagement} />
          <Route path="/caregiver-management" component={CaregiverManagement} />
          <Route path="/payment" component={Payment} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;