# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js Express applications: the lack of proper error handling in asynchronous route handlers.  The application simulates an asynchronous operation that might fail. Without proper error handling, these failures can lead to silent crashes or unexpected behavior.

## The Bug
The `bug.js` file contains an Express.js route that uses a `Promise`.  The asynchronous operation (`doSomethingAsync`) might reject (fail).  However, the route handler lacks a `catch` block to handle these rejections, leading to an unhandled promise rejection and the potential for the server to crash.

## The Solution
The `bugSolution.js` file demonstrates the correct way to handle potential errors in an asynchronous route. A `catch` block is added to the `.then().catch()` chain, logging the error to the console (which would ideally include more sophisticated error logging or reporting). 

This example highlights the importance of robust error handling in asynchronous code, especially when dealing with user requests.