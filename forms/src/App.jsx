import {useState} from 'react';

function App(){
  const [name, setName] = useState("");
  function handleSubmit(e){
    e.preventDefault(); // to prevent the deault form submission behavior which causes a page reload
    console.log(name);
    // Handle form submission
  }

  return(
    <form onSubmit = {handleSubmit}>  
      <input type = "text" 
      placeholder = "Enter your name"
      value = {name} 
      onChange={(e)=> setName(e.target.value)}/>

      <h1>{name}</h1> 

      <button type = "submit">Submit</button>
    </form>
  )
}

export default App;