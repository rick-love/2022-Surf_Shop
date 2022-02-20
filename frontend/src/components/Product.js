import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className='max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img
            className='h-48 w-full object-cover md:h-full md:w-48'
            src={product.image}
            alt='Product'
          />
        </div>
        <div className='p-8 bg-slate-100'>
          <Link
            to={`/product/${product._id}`}
            className='uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline'
          >
            {product.name}
          </Link>
          <div className='block mt-1 text-lg leading-tight font-medium text-black'>
              <span>€ {product.price}</span>
          </div>
          <p className='mt-2 text-slate-500'>{product.description}</p>

          <div className='my-1 leading-tight font-medium text-amber-400'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </div>
          <p className='mt-2 font-medium'>In Stock</p>
        </div>
      </div>
    </div>
  )
}

export default Product
