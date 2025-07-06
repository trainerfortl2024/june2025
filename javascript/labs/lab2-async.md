## Lab2.1 - Handle Asynchronous File Reading with Callbacks   
## Objective
Learn how to use callbacks to handle asynchronous tasks like reading a file.   
## Steps
1. Create a callback function fileReadCallback() that logs "File Reading Complete" after the task.  
2. Use setTimeout() to simulate file reading for 3 seconds inside readFile(), and call fileReadCallback() afterward.  
3. Log "Reading File" before starting the file read operation, and "Waiting for File" after calling the read function.

<hr />

## Lab2-2 -  Fetching Data with Promises
## Objective  
Use promises to fetch data asynchronously and handle success and failure cases.  
## Steps
1. Create a promise fetchData() that resolves with "Data Fetched Successfully" after a 2-second delay.  
2. Use .then() to log the success message and .catch() to handle any errors.  
3. Simulate an error condition where the promise rejects with "Failed to Fetch Data" and handle it using .catch().

<hr />

## Lab2-3 - Processing Multiple Async Tasks with Async/Await
## Objective
Understand how to manage multiple asynchronous tasks using async/await.
## Steps 
1. Create two async functions taskOne() and taskTwo().  
2. Each should return a promise that resolves after 2 and 3 seconds, respectively, with messages "Task One Complete" and "Task Two Complete".   
3. Write an async function processTasks() that waits for both tasks to finish using await and logs their results.   
4. Call processTasks() and observe the order of task completion.

