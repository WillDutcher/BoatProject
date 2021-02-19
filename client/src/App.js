import React from 'react';
import { Router } from '@reach/router';
import NewSkiff from './components/NewSkiff';
import EditSkiff from './components/EditSkiff';
import SingleSkiff from './components/SingleSkiff';
import AllSkiffs from './components/AllSkiffs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // Set this as default in case there's an issue
  const NotFound = () => {
    return (
      <div>
        Route not found.
      </div>
    )
  }
  return (
    <div className="App">
      <Router>
        <AllSkiffs path="/skiffs" />
        <NewSkiff path="/skiffs/new" />
        <SingleSkiff path="/skiffs/:id" />
        <EditSkiff path="/skiffs/:id/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
