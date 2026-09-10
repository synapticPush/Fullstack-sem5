async function hello(){
  return "Hello, World!";
}

const result = hello();
result.then((message) => {
  console.log(message); // Output: Hello, World!
});