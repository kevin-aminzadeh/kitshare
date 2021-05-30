import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" render={() => <h1>Landing Page</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
