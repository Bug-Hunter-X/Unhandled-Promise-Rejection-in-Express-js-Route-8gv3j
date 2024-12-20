const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(err => {
    console.error('Error in route handler:', err); // Proper error handling
    res.status(500).send('Internal Server Error'); // Or a more user-friendly error
  });
});
app.listen(3000, () => console.log('Server started'));

async function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.5; 
      if (shouldFail) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}