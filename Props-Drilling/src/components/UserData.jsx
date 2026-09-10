
import {useContext} from "react";
import UserContext from "./components/UserContext";

export default function UserData(){
  
  const {user,setUser} = useContext(UserContext);



  return (
    <>
      <p>Name: {user.name}</p>
      <p>age: {user.age}</p>

      <button onclick = {() =>{
        setUser({
          ...user,
          name:"PK"
        })
      }}>
        change name
        </button>
      
    </>
  )
}
  