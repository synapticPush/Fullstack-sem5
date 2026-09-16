import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import ProductDetails from './components/ProductDetails'

function App(){

  return(
    <>
      <nav>
        <Link to = "/">Home</Link>
      </nav>
      <Routes>
        <Route path = "/productDetails/:id" element = {<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App;