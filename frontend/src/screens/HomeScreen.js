import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import axios from 'axios'


const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className='container'>
      <h1>Latest Items</h1>

      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-start mx-3'>
        {/* <div className='flex flex-wrap gap-4'> */}
        {products.map((product) => (
          <div key={product._id} className='flex max-w-xl'>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
