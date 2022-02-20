import React from 'react'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
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
