import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an </h3>
          <h1>API Party</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/github"></NavLink>
          </li>
        </ul>
        <switch>
          <Route 
          path="/github" 
          render={() => <h1>GitHub!</h1>} />
          </Route>

          <Route>
            render={() => <p>To get started, click one of the links above.</p>}
          </Route>
        </switch>
      </div>
    );
  }
}

export default App;
