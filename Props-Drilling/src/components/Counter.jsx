import { useState } from "react";

export default function Count(){
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  } 
  function decrement(){
    setCount(count - 1);
    if(count === 0){
      setCount(0);
    } 
  }
  function reset(){
    setCount(0);
  } 
  return(
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}