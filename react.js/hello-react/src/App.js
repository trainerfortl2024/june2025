
import Greeting from './Greeting';


function App() {
  const name = "suresh";
  const names = ["ramesh","ganesh"];
  const employees = [{id:101,name:'ram',salary:1000},
    {id:102,name:'krishna',salary:2000}]
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a simple React App using JSX!</p>
      <hr />
      <Greeting 
      name={name} 
      role="trainer" 
      names={names} 
      employees={employees}  />
    </div>
  );
}

export default App;

// component based architecture 
// MVC Model View Controller




