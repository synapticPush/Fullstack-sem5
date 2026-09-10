function getUser(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pushpendra");
    }, 2000);
  }); 
}


async function displayUser() {
  console.log("Fetching user...");
  const user = await getUser(); // await pauses the execution of the function until the promise is resolved
  console.log(user);
  console.log("User fetched successfully!");
}
displayUser();


console.log("Before calling displayUser function");
