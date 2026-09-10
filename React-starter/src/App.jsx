
import './App.css'
import Navbar from './assets/Navbar.jsx'
import Body from './assets/Body.jsx'
import Footer from './assets/Footer.jsx'
import Studentcard from './assets/Studentcard.jsx' 


const students = [
  {
    name: "Pushpendra",
    class: "Fullstack Development",
    value: "React-starter"
  },
  {
    name: "Archit",
    class: "Frontend Development",
    value: "React-starter"
  },
  {
    name: "Rachit",
    class: "Backend Development",
    value: "React-starter"
  }
];  

function App() {
  
  return (<>  
    {/* <Hello />
    <Navbar />
    <Body />  
    <Footer /> */}
    <h1> Welcome to My App </h1>
    {students.map((student, index) => (
      <Studentcard key={index} name={student.name} class={student.class} value={student.value} />
    ))}

  </>)
}
export default App
