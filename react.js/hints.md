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