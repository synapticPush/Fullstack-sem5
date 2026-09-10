const p = new Promise((resolve, reject) => {
  setTimeout(() => { // executer function(Synchronous function) runs immediately when the promise is created
    const success = true; // Change this to false to test rejection 
    if (success) {
      resolve("Operation successful!"); // Asynchronous in nature
    } else {
      reject("Operation failed!");// Asynchronous in nature
    }
  }, 1000 );});

p.then((message) => {
  console.log(message); // This will run if the promise is resolved
}).catch((error) => {
  console.error(error); // This will run if the promise is rejected
});