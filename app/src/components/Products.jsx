/* eslint-disable react/prop-types */
import { useState } from "react"

const Products = ({ products }) => {

    const [filter, setFilter] = useState(false)
    const [minVal, setMinVal] = useState(0)
    const filteredProducts = filter? products.filter(p => p.price >= minVal) : products

    const handleFilter = (event) => {
        event.preventDefault()
        setMinVal(Number(event.target.value))
    }

    return (
        <div>
            <h1>Products</h1>
            <div>
                <input type="Number" placeholder="Enter min Val" onChange={handleFilter}/>
                <button onClick={()=>setFilter(!filter)}>
                    {filter? 'Clear Filter' : 'Filter'}
                </button>
            </div>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(p => 
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.category}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Products