import UserData from "./components/UserData";
import UserContext from "./components/userContext";
function App() {
  const user = {
    name:"Pushpendra",
    age : 20
  }
  return (
    <> 
    
    <UserContext.Provider value={user}>
          <UserData/>

    </UserContext.Provider>
    </>
  );
}

export default App;