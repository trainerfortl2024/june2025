import React from 'react';
import Employee from './Employee';
import {Router,Link} from '@reach/router';
import AddEmployee from './AddEmployee';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>EMS-2025</h1>
      <Link to="/employee">Show Employee</Link> | <Link to="/add"> Add Employee </Link>

      <Router>
        <Employee path='/employee' />
        <AddEmployee path='/add' />
      </Router>

      
      
    </div>
  );
}

export default App;
