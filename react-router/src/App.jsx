import './App.css'
import { Routes, Route , Link} from 'react-router-dom'

function Home(){
  return <h1>Home Page</h1>
}
function About(){
  return <h1>About Page</h1>
}
function Contact(){
  return <h1>Contact Page</h1>
}

function App() {
  return (
    <>
   {/* link is used to create navigation links in the application. It allows users to navigate between different routes without triggering a full page reload. */}
      <nav> 
        
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link> 
        <Link to = "/contact">Contact</Link>
      </nav>
      {/*  # routes is used to define the different routes in the application. It acts as a container for all the Route components. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <a href="/about">About</a> <a href="/contact">Contact</a>
    </>
  )
}

export default App