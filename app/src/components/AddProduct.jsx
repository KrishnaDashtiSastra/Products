/* eslint-disable react/prop-types */
import prodservice from './../services/products.js'
import './../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddProduct = ({setProducts}) => {  
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: ''
  })

  const handleAddProduct = (event) => {
    event.preventDefault()

    const productObject = {
      name: newProduct.name,
      price: newProduct.price,
      category: newProduct.category
    }

    prodservice.create(productObject).then(returnedProduct => {
      setProducts(returnedProduct)
      setNewProduct({
        name: '',
        price: '',
        category: ''
      })
    })
    navigate("/products")
  }
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
      setNewProduct({
        ...newProduct,
        [name]: value
      })
    }
  
    return (
      <>
        <div>
          <h1>Insert Product</h1>
          <form onSubmit={handleAddProduct}>
              <input type="text" name="name" value={newProduct.name} placeholder="Name" onChange={handleInputChange}/>
              <input type="text" name="price" value={newProduct.price} placeholder="Price" onChange={handleInputChange}/>
              <input type="text" name="category" value={newProduct.category} placeholder="Category" onChange={handleInputChange}/>
              <button type="submit">Add Product</button>
          </form>
        </div>
      </>
    )
  }

  export default AddProduct