# Intro
React is a JavaScript library used to build fast, interactive user interfaces (UI) for web applications, focusing on `component-based architecture`.  

`JSX` is a syntax extension that allows you to write HTML-like code in JavaScript, which is then compiled into standard JavaScript.

`babel` is a transpiler , used to convert jsx code into browser understandable javascript code.

# Functional Component and props
Functional components in React are JavaScript functions that return JSX and are used to build UI components.  
`Props` allow you to pass data from one component to another, enabling dynamic content in your application. 

## useState

## useEffect
- Component - Life cycle
- fetch data from services - service (express.js) will get data from backend/db
# useEffect Dependency Array Summary

| Dependency Array     | When useEffect Runs                              |
|----------------------|--------------------------------------------------|
| `[]`                 | On **mount** and **cleanup on unmount**         |
| `[value]`            | On **mount** and whenever `value` changes       |
| No array (default)   | On **every render**                              |
| `[normalVar]` ❌     | ⚠️ Not recommended — React won't track changes   |

### Notes:
- ✅ Use **state** or **props** in dependency array.
- ❌ Avoid using **normal variables** (not reactive).

## Controlled Component / UnControlled Component
- Element = Component
- Form - 
        elements (textbox, radio, checkbox, .....)
- controlled by react - controlled element
- controlled by DOM - uncontrolled element


## useReducer - hook
### Why?
useState is great for simple scenarios where you’re managing one or two state   
values, but when things get more complex, useReducer is a better choice.  

### When to use useState
When you only need to manage a few simple state values.  
Example: Tracking the value of a single input field.  

### When to use useReducer
When you have multiple pieces of state that are related.  
When the state transitions depend on the type of actions  
(e.g., setting values, resetting form fields).  
When you want to make your state logic easier to read and maintain, especially as your app grows.  


## Global State Management with Context API
* The Context API solves the `prop drilling` problem by allowing global state sharing across components without passing `props` manually.  

* `useContext` helps consume the global state in functional components.  

## Router and Navigation
### ReachRouter 

* Install Reach Router.
* Set up routing in a React app using <Router>.
* Create basic routes for different pages.
* Navigate between pages using <Link> and the navigate function.

`<Router>` defines the different routes in your app. Each route is mapped to a different component (Home, About, Contact).  

`<Link>` allows for navigation between different routes without reloading the page.

 Navitation :   
 ```js
 //Reach Router Navigation
import {navigate} from '@reach/router'

export default function About() {
  return (
    <div>
        <h3>About Component</h3>
        <button onClick={() => navigate('/')}>Go home</button>
    </div>
      )
}

 ```

### React Router
* Install React Router. (npm install react-router-dom@6)

* Set up routing in a React app using <BrowserRouter>.

* Create basic routes for different pages.

* Navigate between pages using <Link> and the useNavigate hook.


Navigation :   
```js
//React Router Navigation
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
  return (
    <div>
        <h3>About Component</h3>
        <button onClick={() => {navigate('/')}}>Go home</button>
    </div>
      )
}
```

### API Integration and Data Fetching
Local Data -  JSON - [] [{},{},{},....]
