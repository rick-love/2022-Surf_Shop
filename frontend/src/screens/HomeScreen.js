import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className='container'>
      <h1>Latest Items</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-start mx-3'>
          {products.map((product) => (
            <div key={product._id} className='flex max-w-xl'>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomeScreen
