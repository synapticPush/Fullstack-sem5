console.log("Hello");

setTimeout(() => {console.log("Inside setTimeOut");},3000) // goes to browser(time complete)--> callback queue --> Event loop(when stack become empty) --> call stack

console.log("Bye");