import { useState, useEffect } from 'react'
import Products from './components/Products.jsx'
import prodservice from './services/products.js'
import AddProduct from './components/AddProduct.jsx'
import Home from './components/Home.jsx'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    prodservice.getAll().then(initialProducts => {
      setProducts(initialProducts);
    })
  }, []);

  const padding ={
    padding: 5
  }

  return (
    
    <Router>
      <nav>
        <Link style={padding} to='/'>Home</Link>
        <Link style={padding} to='/Products'>Products</Link>
        <Link style={padding} to='/AddProduct'>Add Product</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products products={products} setProducts={setProducts}/>}/>
        <Route path='/AddProduct' element={<AddProduct setProducts={setProducts}/>}/>
      </Routes>
    </Router>


    // <>
    //   <Products products={products} />
    //   <AddProduct setProducts={setProducts}/>
    // </>
  )
}

export default App
