
import { useState } from 'react';
import Greeting from './Greeting';
import Employee from './passing-data/Employee';
import Counter from './states/Counter';
import Display from './states/Display';
import Student from './passing-data/Student';


function App() {
  const name = "suresh";
  const names = ["ramesh", "ganesh"];
  const employees = [{ id: 101, name: 'ram', salary: 1000 },
  { id: 102, name: 'krishna', salary: 2000 }]
  const tc = 100;

  const [empCount, setEmpCount] = useState(10);
  const [studCount, setStudCount] = useState(20);

  const empHandler = (a) => {
    setEmpCount(a)
  }
   const studHandler = (b) => {
    setStudCount(b)
  }

  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a simple React App using JSX!</p>

      <hr />
      Total Employees = {empCount} | Total Students = {studCount}
      <hr />
      {/* <Greeting 
      name={name} 
      role="trainer" 
      names={names} 
      employees={employees}  /> */}

      {/* <Counter c={tc} /> */}
      {/* <Display /> */}

      {/* passing data between components */}
      <Employee empCount={empCount} empHandler={empHandler} />
      <Student studCount={studCount} studHandler={studHandler} />

    </div>
  );
}

export default App;

// component based architecture 
// MVC Model View Controller




