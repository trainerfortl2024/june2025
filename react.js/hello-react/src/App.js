
import { useState } from 'react';
import Greeting from './Greeting';
import Employee from './passing-data/Employee';
import Counter from './states/Counter';
import Display from './states/Display';
import Student from './passing-data/Student';
import DataFetchingComponent from './effects/DataFetchingComponent';
import LoginForm3 from './elements/LoginForm3';
import LoginForm4 from './elements/LoginForm4';
import A from './globalstate/A';
import OrgContext from './globalstate/OrgConext';
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';

// import { Router, Link } from '@reach/router';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'


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


  //global state
  const [org, setOrg] = useState('ABC-Chennai')

  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a simple React App using JSX!</p>


      {/* Total Employees = {empCount} | Total Students = {studCount} */}
      {/* <hr /> */}
      {/* <Greeting 
      name={name} 
      role="trainer" 
      names={names} 
      employees={employees}  /> */}

      {/* <Counter c={tc} /> */}
      {/* <Display /> */}

      {/* passing data between components */}
      {/* <Employee empCount={empCount} empHandler={empHandler} />
      <Student studCount={studCount} studHandler={studHandler} /> */}

      {/* Fetching Example */}
      {/* <DataFetchingComponent /> */}

      {/* <LoginForm4 /> */}

      {/* global state - Context API */}
      {/* <OrgContext.Provider value={{ org, names }}>
        <A />
        </OrgContext.Provider> */}


      {/* Routing - Navigation -using Reach Router (npm i @reach/router --force) */}
      
      {/* <hr />
      <Link to="/">Home</Link>   |    <Link to="/about">About</Link>     |  <Link to="/contact">Contact</Link> |
      <Link to="/greeting">Greeting</Link>
      <hr />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        
      </Router> */}



      {/* Routing - Navigation -using React Router (npm i react-router-dom@6) */}


      <BrowserRouter>
      
      <Link to="/">Home</Link>   |  <Link to="/about">About</Link>   |  <Link to="/contact">Contact</Link> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;

// component based architecture 
// MVC Model View Controller




