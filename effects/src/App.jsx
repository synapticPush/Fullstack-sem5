import  { useState, useEffect } from "react";

function App(){
  const[users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(()=>{
    async function getUsers(){

      console.log("useEfect called");
      try{

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setUsers(data); // state update
      }
      catch(error){
        
        setError(error.message);
      }finally{
        setLoading(false);
      }
      
      
    }
    getUsers()
  },[] // dependency array 
)

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Error: {error}</h1>
  }
 
    return(
      <>
        {users.map((user)=>(
          <div key = {user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </>
    )
}

export default App;


