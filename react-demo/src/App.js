import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';

let token = null;

function App() {
  const rerender = useState(0)[1];

  function requireLogin (to, from, next) {
    if (to.meta.auth) {
      if (token !== null) {
        next();
      }
      next.redirect('/login');
    }
    else {
      next();
    }
  }

  function setToken(newToken) {
    token = newToken;
    rerender(Math.random());
  }

  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <Navigation token={token} />
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <GuardedRoute path="/login">
              <Login setToken={setToken} logout={false} />
            </GuardedRoute>
            <GuardedRoute path="/register">
              <Register setToken={setToken} />
            </GuardedRoute>
            <GuardedRoute path="/" exact meta={{ auth: true }}>
              <Dashboard token={token} />
            </GuardedRoute>
            <GuardedRoute path="/logout" meta={{ auth: true }}>
              <Login setToken={setToken} logout={true} />
            </GuardedRoute>
          </Switch>    
        </GuardProvider>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} />
    </Router>
  );
}

export default App;
